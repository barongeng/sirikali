/*
 *
 *  Copyright (c) 2018
 *  name : Francis Banyikwa
 *  email: mhogomchungu@gmail.com
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "engines.h"

#include "engines/ecryptfs.h"
#include "engines/cryfs.h"
#include "engines/gocryptfs.h"
#include "engines/encfs.h"
#include "engines/sshfs.h"
#include "engines/unknown.h"
#include "engines/securefs.h"
#include "engines/fscrypt.h"
#include "engines/custom.h"

#include "utility.h"
#include "settings.h"
#include "win.h"

QStringList engines::executableSearchPaths()
{
	const auto a = QDir::homePath().toLatin1() ;

	if( utility::platformIsWindows() ){

		QStringList s = { QDir().currentPath() + "\\bin\\",
				  a + "\\bin\\",
				  a + "\\.bin\\",
				  settings::instance().windowsExecutableSearchPath() + "\\" } ;

		for( const auto& it : SiriKali::Windows::engineInstalledDirs() ){

			if( !it.isEmpty() ){

				s.append( it + "\\bin\\" ) ;
			}
		}

		return s ;
	}else{
		const auto b = a + "/bin/" ;
		const auto c = a + "/.bin/" ;

		return { "/usr/local/bin/",
			"/usr/local/sbin/",
			"/usr/bin/",
			"/usr/sbin/",
			"/bin/",
			"/sbin/",
			"/opt/local/bin/",
			"/opt/local/sbin/",
			"/opt/bin/",
			"/opt/sbin/",
			 b.constData(),
			 c.constData() } ;
	}
}

bool engines::exeFullPath::isEmpty( const QString& e ) const
{
	return e.isEmpty() ;
}

bool engines::version::isEmpty( const QString& e ) const
{
	return e.isEmpty() ;
}

bool engines::booleanCache::isEmpty( const utility::result< bool >& e ) const
{
	return !e.has_value() ;
}

static bool _has_no_extension( const QString& e )
{
	return !e.contains( '.' ) ;
}

QString engines::executableFullPath( const QString& f )
{
	if( utility::platformIsWindows() ){

		if( utility::startsWithDriveLetter( f ) ){

			if( _has_no_extension( f ) ){

				return f + ".exe " ;
			}else{
				return f ;
			}
		}
	}else{
		if( f.startsWith( "/" ) ){

			return f ;
		}
	}

	QString e = f ;

	if( utility::platformIsWindows() && _has_no_extension( e ) ){

		e += ".exe" ;
	}

	QString exe ;

	for( const auto& it : engines::executableSearchPaths() ){

		if( !it.isEmpty() ){

			exe = it + e ;

			if( QFile::exists( exe ) ){

				return exe ;
			}
		}
	}

	return QString() ;
}

engines::engine::~engine()
{
}

void engines::engine::updateVolumeList( const engines::engine::options& e ) const
{
	Q_UNUSED( e )
}

QStringList engines::engine::mountInfo( const QStringList& e ) const
{
	Q_UNUSED( e )
	return {} ;
}

Task::future< QString >& engines::engine::volumeProperties( const QString& cipherFolder,
							    const QString& mountPoint ) const
{
	return Task::run( [ = ](){

		for( const auto& it : this->volumePropertiesCommands() ){

			auto a = utility::split( it,' ' ) ;
			auto b = utility::executableFullPath( a.first() ) ;
			a.removeFirst() ;
			auto c = a.join( " " ) ;

			if( !b.isEmpty() ){

				auto x = utility::Task::makePath( cipherFolder ) ;
				auto y  = utility::Task::makePath( mountPoint ) ;

				c.replace( "%{cipherFolder}",x ) ;
				c.replace( "%{plainFolder}",y ) ;

				auto d = utility::Task::makePath( b ) ;

				auto e = utility::unwrap( utility::Task::run( d + " " + c ) ) ;

				if( e.success() ){

					return QString( e.stdOut() ) ;
				}
			}
		}

		return QString() ;
	} ) ;
}

engines::engine::status engines::engine::unmount( const QString& cipherFolder,
						  const QString& mountPoint,
						  int maxCount ) const
{
	Q_UNUSED( cipherFolder )
	return siritask::unmountVolume( mountPoint,this->unMountCommand(),maxCount ) ;
}

const engines::engine& engines::engine::proveEngine( const QString& cipherPath ) const
{
	Q_UNUSED( cipherPath )

	return engines::instance().getUnKnown() ;
}

const QProcessEnvironment& engines::engine::getProcessEnvironment() const
{
	return m_processEnvironment ;
}

QString engines::engine::sanitizeVersionString( const QString& s ) const
{
	auto e = s ;

	e.replace( "v","" ).replace( ";","" ) ;

	QString m ;

	for( int s = 0 ; s < e.size() ; s++ ){

		auto n = e.at( s ) ;

		if( n == '.' || ( n >= '0' && n <= '9' ) ){

			m += n ;
		}else{
			break ;
		}
	}

	return m ;
}

QString engines::engine::baseInstalledVersionString( const QString& versionArgument,
						     bool readFromStdOut,
						     int argumentNumber,
						     int argumentLine ) const
{
	const auto& s = utility::systemEnvironment() ;

	const auto cmd = utility::Task::makePath( this->executableFullPath() ) + " " + versionArgument ;

	const auto r = utility::unwrap( ::Task::process::run( cmd,{},-1,{},s ) ) ;

	const auto m = utility::split( readFromStdOut ? r.std_out() : r.std_error(),'\n' ) ;

	if( m.size() > argumentLine ){

		const auto e = utility::split( m.at( argumentLine ),' ' ) ;

		if( e.size() > argumentNumber ){

			return this->sanitizeVersionString( e.at( argumentNumber ) ) ;
		}
	}

	return {} ;
}

engines::engine::engine( engines::engine::BaseOptions o ) :
	m_Options( std::move( o ) ),
	m_processEnvironment( utility::systemEnvironment() )
{
	if( utility::platformIsWindows() ){

		const auto& a = m_Options.windowsInstallPathRegistryKey ;
		const auto& b = m_Options.windowsInstallPathRegistryValue ;

		auto s = SiriKali::Windows::engineInstalledDir( a,b ) ;

		if( !s.isEmpty() ){

			auto a = s + ";" ;
			auto b = s + "\\bin;" ;
			auto c = a + b + m_processEnvironment.value( "PATH" ) ;

			m_processEnvironment.insert( "PATH",c ) ;
		}
	}
}

QString engines::engine::executableFullPath() const
{
	return engines::executableFullPath( this->executableName() ) ;
}

bool engines::engine::isInstalled() const
{
	return !this->isNotInstalled() ;
}

bool engines::engine::isNotInstalled() const
{
	return this->executableFullPath().isEmpty() ;
}

bool engines::engine::unknown() const
{
	return this->name().isEmpty() ;
}

bool engines::engine::known() const
{
	return !this->unknown() ;
}

bool engines::engine::setsCipherPath() const
{
	return m_Options.setsCipherPath ;
}

bool engines::engine::autoMountsOnCreate() const
{
	return m_Options.autoMountsOnCreate ;
}

bool engines::engine::hasGUICreateOptions() const
{
	return m_Options.hasGUICreateOptions ;
}

bool engines::engine::hasConfigFile() const
{
	return m_Options.hasConfigFile ;
}

bool engines::engine::supportsMountPathsOnWindows() const
{
	return m_Options.supportsMountPathsOnWindows ;
}

bool engines::engine::requiresAPassword() const
{
	return m_Options.requiresAPassword ;
}

bool engines::engine::customBackend() const
{
	return m_Options.customBackend ;
}

bool engines::engine::autorefreshOnMountUnMount() const
{
	return m_Options.autorefreshOnMountUnMount ;
}

bool engines::engine::backendRequireMountPath() const
{
	return m_Options.backendRequireMountPath ;
}

bool engines::engine::versionIsLessOrEqualTo( const QString& e ) const
{
	auto a = utility::versionIsLessOrEqualTo( this->installedVersionString(),e ) ;

	return a.has_value() && a.value() ;
}

bool engines::engine::versionGreaterOrEqualTo( const QString& e ) const
{
	auto a = utility::versionIsGreaterOrEqualTo( this->installedVersionString(),e ) ;

	return a.has_value() && a.value() ;
}

bool engines::engine::takesTooLongToUnlock() const
{
	return m_Options.takesTooLongToUnlock ;
}

bool engines::engine::requiresPolkit() const
{
	return m_Options.requiresPolkit ;
}

const QStringList& engines::engine::names() const
{
	return m_Options.names ;
}

const QStringList& engines::engine::fuseNames() const
{
	return m_Options.fuseNames ;
}

const QStringList& engines::engine::configFileNames() const
{
	return m_Options.configFileNames ;
}

const QStringList& engines::engine::fileExtensions() const
{
	return m_Options.fileExtensions ;
}

const QString& engines::engine::reverseString() const
{
	return m_Options.reverseString ;
}

const QString& engines::engine::idleString() const
{
	return m_Options.idleString ;
}

const QString& engines::engine::releaseURL() const
{
	return m_Options.releaseURL ;
}

const QString& engines::engine::executableName() const
{
	return m_Options.executableName ;
}

const QString& engines::engine::name() const
{
	if( m_Options.names.isEmpty() ){

		static QString s ;
		return s ;
	}else{
		return m_Options.names.first() ;
	}
}

const QString& engines::engine::configFileName() const
{
	if( m_Options.configFileNames.isEmpty() ){

		static QString s ;
		return s ;
	}else{
		return m_Options.configFileNames.first() ;
	}
}

const QString& engines::engine::incorrectPasswordText() const
{
	return m_Options.incorrectPasswordText ;
}

const QString& engines::engine::incorrectPasswordCode() const
{
	return m_Options.incorrectPassWordCode ;
}

const QString& engines::engine::unMountCommand() const
{
	return m_Options.unMountCommand ;
}

const QString& engines::engine::windowsUnMountCommand() const
{
	return m_Options.windowsUnMountCommand ;
}

const QString& engines::engine::windowsInstallPathRegistryKey() const
{
	return m_Options.windowsInstallPathRegistryKey ;
}

const QString& engines::engine::windowsInstallPathRegistryValue() const
{
	return m_Options.windowsInstallPathRegistryValue ;
}

const QStringList& engines::engine::volumePropertiesCommands() const
{
	return m_Options.volumePropertiesCommands ;
}

const QString& engines::engine::minimumVersion() const
{
	return m_Options.minimumVersion ;
}

static bool _contains( const QString& e,const QStringList& m )
{
	for( const auto& it : m ){

		if( e.contains( it ) ){

			return true ;
		}
	}

	return false ;
}

engines::engine::error engines::engine::errorCode( const QString& e ) const
{
	if( _contains( e,m_Options.successfulMountedList ) ){

		return engines::engine::error::Success ;

	}else if( _contains( e,m_Options.failedToMountList ) ){

		return engines::engine::error::Failed ;
	}else{
		return engines::engine::error::Continue ;
	}
}

engines::engine::status engines::engine::passMinimumVersion() const
{
	return engines::engine::status::success ;
}

void engines::engine::updateOptions( engines::engine::options& e ) const
{
	Q_UNUSED( e )
}

QString engines::engine::setConfigFilePath( const QString& e ) const
{
	if( m_Options.configFileArgument.isEmpty() ){

		return QString() ;
	}else{
		return m_Options.configFileArgument + " " + e ;
	}
}

QByteArray engines::engine::setPassword( const QByteArray& e ) const
{
	auto s = m_Options.passwordFormat ;
	s.replace( "%{password}",e ) ;
	return s ;
}

engines::engine::status engines::engine::notFoundCode() const
{
	return m_Options.notFoundCode ;
}

int engines::engine::backendTimeout() const
{
	return m_Options.backendTimeout ;
}

const engines& engines::instance()
{
	static engines v ;
	return v ;
}

bool engines::atLeastOneDealsWithFiles() const
{
	for( const auto& it : this->supportedEngines() ){

		if( it->fileExtensions().size() > 0 ){

			return true ;
		}
	}

	return false ;
}

QStringList engines::mountInfo( const QStringList& m ) const
{
	QStringList s ;

	for( const auto& e : this->supportedEngines() ){

		s += e->mountInfo( m ) ;
	}

	return s ;
}

QStringList engines::enginesWithNoConfigFile() const
{
	QStringList m ;

	for( const auto& it : this->supportedEngines() ){

		if( !it->hasConfigFile() ){

			m.append( it->name() ) ;
		}
	}

	return m ;
}

QStringList engines::enginesWithConfigFile() const
{
	QStringList m ;

	for( const auto& it : this->supportedEngines() ){

		if( it->hasConfigFile() ){

			m.append( it->name() ) ;
		}
	}

	return m ;
}

const std::vector< engines::engine::Wrapper >& engines::supportedEngines() const
{
	return m_backendWrappers ;
}

const engines::engine& engines::getUnKnown() const
{
	return **( m_backends.data() ) ;
}

engines::engines()
{
	m_backends.emplace_back( std::make_unique< unknown >() ) ;

	if( utility::platformIsWindows() ){

		m_backends.emplace_back( std::make_unique< securefs >() ) ;
		m_backends.emplace_back( std::make_unique< cryfs >() ) ;
		m_backends.emplace_back( std::make_unique< encfs >() ) ;
		m_backends.emplace_back( std::make_unique< sshfs >() ) ;

	}else if( utility::platformIsOSX() ){

		m_backends.emplace_back( std::make_unique< securefs >() ) ;
		m_backends.emplace_back( std::make_unique< cryfs >() ) ;
		m_backends.emplace_back( std::make_unique< gocryptfs >() ) ;
		m_backends.emplace_back( std::make_unique< encfs >() ) ;
	}else{
		m_backends.emplace_back( std::make_unique< securefs >() ) ;
		m_backends.emplace_back( std::make_unique< cryfs >() ) ;
		m_backends.emplace_back( std::make_unique< gocryptfs >() ) ;
		m_backends.emplace_back( std::make_unique< encfs >() ) ;
		m_backends.emplace_back( std::make_unique< ecryptfs >() ) ;
		m_backends.emplace_back( std::make_unique< sshfs >() ) ;
		m_backends.emplace_back( std::make_unique< fscrypt >() ) ;
	}

	custom::addEngines( m_backends ) ;

	for( size_t i = 1 ; i < m_backends.size() ; i++ ){

		m_backendWrappers.emplace_back( *( m_backends[ i ] ) ) ;
	}
}

template< typename Engines,typename Compare,typename listSource >
static std::pair< const engines::engine&,QString > _get_engine( const Engines& engines,
								Compare compareFunction,
								listSource listSourceFunction )
{
	const auto data = engines.data() ;

	for( size_t i = 1 ; i < engines.size() ; i++ ){

		const auto& s = **( data + i ) ;

		for( const auto& xt : listSourceFunction( s ) ){

			if( compareFunction( xt ) ){

				return { s,xt } ;
			}
		}
	}

	return { **data,QString() } ;
}

std::pair< const engines::engine&,QString >
engines::getByConfigFileNames( std::function< bool( const QString& ) > function ) const
{
	return _get_engine( m_backends,
			    std::move( function ),
			    []( const engines::engine& s ){ return s.configFileNames() ; } ) ;
}

const engines::engine& engines::getByFuseName( const QString& e ) const
{
	auto m = _get_engine( m_backends,
			      [ & ]( const QString& s ){ return !e.compare( s,Qt::CaseInsensitive ) ; },
			      []( const engines::engine& s ){ return s.fuseNames() ; } ) ;
	return m.first ;
}

const engines::engine& engines::getByFileExtension( const QString& e ) const
{
	auto m = _get_engine( m_backends,
			      [ & ]( const QString& s ){ return e.endsWith( s,Qt::CaseInsensitive ) ; },
			      []( const engines::engine& s ){ return s.fileExtensions() ; } ) ;
	return m.first ;
}

const engines::engine& engines::getByName( const QString& e ) const
{
	auto m = _get_engine( m_backends,
			      [ & ]( const QString& s ){ return !e.compare( s,Qt::CaseInsensitive ) ; },
			      []( const engines::engine& s ){ return s.names() ; } ) ;
	return m.first ;
}

engines::engine::cmdStatus::cmdStatus()
{
}

engines::engine::cmdStatus::cmdStatus( engines::engine::status s,
				       const engines::engine& n,
				       const QString& e ) :
	m_status( s ),m_message( e ),m_engine( n )
{
	while( true ){

		if( m_message.endsWith( '\n' ) ){

			m_message.truncate( m_message.size() - 1 ) ;
		}else{
			break ;
		}
	}
}

engines::engine::status engines::engine::cmdStatus::status() const
{
	return m_status ;
}

bool engines::engine::cmdStatus::operator==( engines::engine::status s ) const
{
	return m_status == s ;
}

bool engines::engine::cmdStatus::operator!=( engines::engine::status s ) const
{
	return m_status != s ;
}

QString engines::engine::cmdStatus::toMiniString() const
{
	return m_message ;
}

const engines::engine& engines::engine::cmdStatus::engine() const
{
	return m_engine.get() ;
}

bool engines::engine::cmdStatus::success() const
{
	return m_status == engines::engine::status::success ;
}

QString engines::engine::cmdStatus::toString() const
{
	switch( m_status ){

	case engines::engine::status::success :

		/*
		 * Should not get here
		 */

		return "Success" ;

	case engines::engine::status::failedToUnMount :

		return QObject::tr( "Failed To Unmount %1 Volume" ).arg( m_engine->name() ) ;

	case engines::engine::status::volumeCreatedSuccessfully :

		return QObject::tr( "Volume Created Successfully." ) ;

	case engines::engine::status::backendRequiresPassword :

		return QObject::tr( "Backend Requires A Password." ) ;

	case engines::engine::status::cryfsBadPassword :

		return QObject::tr( "Failed To Unlock A Cryfs Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::sshfsBadPassword :

		return QObject::tr( "Failed To Connect To The Remote Computer.\nWrong Password Entered." ) ;

	case engines::engine::status::encfsBadPassword :

		return QObject::tr( "Failed To Unlock An Encfs Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::gocryptfsBadPassword :

		return QObject::tr( "Failed To Unlock A Gocryptfs Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::ecryptfsBadPassword :

		return QObject::tr( "Failed To Unlock An Ecryptfs Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::fscryptBadPassword :

		return QObject::tr( "Failed To Unlock An fscrypt Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::failedToStartPolkit :

		return QObject::tr( "Backend Requires Polkit Support and SiriKali Failed To Start It." ) ;

	case engines::engine::engine::status::IllegalPath :

		return QObject::tr( "A Space Character Is Not Allowed In Paths When Using Ecryptfs Backend And Polkit." ) ;

	case engines::engine::status::securefsBadPassword :

		return QObject::tr( "Failed To Unlock A Securefs Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::customCommandBadPassword :

		return QObject::tr( "Failed To Unlock A Custom Volume.\nWrong Password Entered." ) ;

	case engines::engine::status::sshfsNotFound :

		return QObject::tr( "Failed To Complete The Request.\nSshfs Executable Could Not Be Found." ) ;

	case engines::engine::status::fscryptNotFound :

		return QObject::tr( "Failed To Complete The Request.\nFscrypt Executable Could Not Be Found." ) ;

	case engines::engine::status::backEndDoesNotSupportCustomConfigPath :

		return QObject::tr( "Backend Does Not Support Custom Configuration File Path." ) ;

	case engines::engine::status::cryfsNotFound :

		return QObject::tr( "Failed To Complete The Request.\nCryfs Executable Could Not Be Found." ) ;

	case engines::engine::status::backendTimedOut :

		return QObject::tr( "Something Is Wrong With The Backend And It Took Too Long To Respond." ) ;

	case engines::engine::status::cryfsMigrateFileSystem :

		return QObject::tr( "This Volume Of Cryfs Needs To Be Upgraded To Work With The Version Of Cryfs You Are Using.\n\nThe Upgrade is IRREVERSIBLE And The Volume Will No Longer Work With Older Versions of Cryfs.\n\nTo Do The Upgrade, Check The \"Upgrade File System\" Option And Unlock The Volume Again." ) ;

	case engines::engine::status::encfsNotFound :

		return QObject::tr( "Failed To Complete The Request.\nEncfs Executable Could Not Be Found." ) ;

	case engines::engine::status::ecryptfs_simpleNotFound :

		return QObject::tr( "Failed To Complete The Request.\nEcryptfs-simple Executable Could Not Be Found." ) ;

	case engines::engine::status::gocryptfsNotFound :

		return QObject::tr( "Failed To Complete The Request.\nGocryptfs Executable Could Not Be Found." ) ;

	case engines::engine::status::securefsNotFound :

		return QObject::tr( "Failed To Complete The Request.\nSecurefs Executable Could Not Be Found." ) ;

	case engines::engine::status::failedToCreateMountPoint :

		return QObject::tr( "Failed To Create Mount Point." ) ;

	case engines::engine::status::failedToLoadWinfsp :

		return QObject::tr( "Backend Could Not Load WinFsp. Please Make Sure You Have WinFsp Properly Installed." ) ;

	case engines::engine::status::unknown :

		return QObject::tr( "Failed To Unlock The Volume.\nNot Supported Volume Encountered." ) ;

	case engines::engine::status::backEndFailedToMeetMinimumRequirenment :

	{
		const auto& s = m_engine.get() ;

		auto a = s.name() ;
		auto b = s.minimumVersion() ;

		return QObject::tr( "Installed \"%1\" Version Is Too Old.\n Please Update To Atleast Version %2." ).arg( a,b ) ;
	}

	case engines::engine::status::fscryptPartialVolumeClose :

		return QObject::tr( "Folder Not Fully Locked Because Some Files Are Still In Use." ) ;

	case engines::engine::status::customCommandNotFound :

		return QObject::tr( "Failed To Complete The Request.\nThe Executable For This Backend Could Not Be Found." ) ;

	case engines::engine::status::invalidConfigFileName :

	{
		const auto& e = m_engine.get().configFileNames() ;

		if( e.size() == 1 ){

			auto s = e.first() ;
			return QObject::tr( "Invalid Config File Name.\nIts Name Must End With \"%1\"" ).arg( s ) ;
		}else{
			auto s = e.join( ", " ) ;
			return QObject::tr( "Invalid Config File Name.\nIt Must End With One Of The Following:\n\"%1\"" ).arg( s ) ;
		}
	}

	case engines::engine::status::backendFail : break ;

	}

	auto e = QObject::tr( "Failed To Complete The Task And Below Log was Generated By The Backend.\n" ) ;
	return e + "\n----------------------------------------\n" + m_message ;
}

engines::engine::Options::Options( QStringList s,bool r ) :
	options( std::move( s ) ),reverseMode( r ),success( true )
{
}

engines::engine::Options::Options( QStringList s ) :
	options( std::move( s ) ),reverseMode( false ),success( true )
{
}

engines::engine::Options::Options( bool r ) :
	reverseMode( r ),success( true )
{
}

engines::engine::Options::Options() : success( false )
{
}

engines::engine::options::options( const favorites::entry& e,const QByteArray& volumeKey ) :
	cipherFolder( e.volumePath ),
	plainFolder( e.mountPointPath ),
	key( volumeKey ),
	idleTimeout( e.idleTimeOut ),
	configFilePath( e.configFilePath ),
	ro( e.readOnlyMode.defined() ? e.readOnlyMode.True() : false ),
	reverseMode( e.reverseMode ),
	mountOptions( e.mountOptions )
{
}

engines::engine::options::options( const QString& cipher_folder,
				   const QString& plain_folder,
				   const QByteArray& volume_key,
				   const QString& idle_timeout,
				   const QString& config_file_path,
				   bool unlock_in_read_only,
				   bool unlock_in_reverse_mode,
				   const QString& mount_options,
				   const QString& create_options ) :
	cipherFolder( cipher_folder ),
	plainFolder( plain_folder ),
	key( volume_key ),
	idleTimeout( idle_timeout ),
	configFilePath( config_file_path ),
	ro( unlock_in_read_only ),
	reverseMode( unlock_in_reverse_mode ),
	mountOptions( mount_options ),
	createOptions( create_options )
{
}

engines::engine::args::args( const engines::engine::cmdArgsList& m,
			     const engines::engine::commandOptions& s,
			     const QString& c ) :
	cmd( c ),
	cipherPath( m.cipherFolder ),
	mountPath( m.mountPoint ),
	fuseOptions( s.constFuseOpts() ),
	exeOptions( s.constExeOptions() ),
	mode( s.mode() ),
	subtype( s.subType() )
{
}

engines::engine::args::args()
{
}

void engines::engine::encodeSpecialCharacters( QString& e )
{
	struct args{

		const char * first ;
		const char * second ;
	} ;

	static std::vector< args > s{ { ",","SiriKaliSpecialCharacter001" } } ;

	for( const auto& it : s ){

		e.replace( it.first,it.second ) ;
	}
}


void engines::engine::decodeSpecialCharacters( QString& e )
{
	struct args{

		const char * first ;
		const char * second ;
	} ;

	static std::vector< args > s{ { "SiriKaliSpecialCharacter001","," },
				      { "\\012","\n" },
				      { "\\040"," " },
				      { "\\134","\\" },
				      { "\\011","\\t" } } ;

	for( const auto& it : s ){

		e.replace( it.first,it.second ) ;
	}
}

engines::engine::commandOptions::commandOptions( const engines::engine::cmdArgsList& e,
						 const QString& f,
						 const QString& subtype )
{
	auto cipherFolder = [ & ]( QString s ){

		engines::engine::encodeSpecialCharacters( s ) ;

		return s ;
	} ;

	for( const auto& it : utility::split( e.opt.mountOptions,',' ) ) {

		if( it.startsWith( '-' ) ){

			m_exeOptions += it + " " ;
		}else{
			m_fuseOptions += it + "," ;
		}
	}

	if( m_exeOptions.endsWith( " " ) ){

		m_exeOptions = utility::removeLast( m_exeOptions,1 ) ;
	}

	if( m_fuseOptions.endsWith( "," ) ){

		m_fuseOptions = utility::removeLast( m_fuseOptions,1 ) ;
	}

	if( !utility::platformIsLinux() && !m_fuseOptions.contains( "volname=" ) ){

		QString s ;

		if( utility::platformIsOSX() ){

			s = utility::split( e.opt.plainFolder,'/' ).last() ;
		}else{
			s = utility::split( cipherFolder( e.opt.cipherFolder ),'/' ).last() ;
		}

		if( !s.isEmpty() ){

			if( m_fuseOptions.isEmpty() ){

				m_fuseOptions = "volname=" + utility::Task::makePath( s ) ;
			}else{
				m_fuseOptions += ",volname=" + utility::Task::makePath( s ) ;
			}
		}
	}

	QString s = [ & ](){

		if( e.opt.ro ){

			return " -o ro,fsname=%1@%2%3" ;
		}else{
			return " -o rw,fsname=%1@%2%3" ;
		}
	}() ;

	m_mode = e.opt.ro ? "ro" : "rw" ;

	m_subtype = subtype ;

	QString stype = subtype.isEmpty() ? "" : ",subtype=" + subtype ;

	auto ss = cipherFolder( e.cipherFolder ) ;

	if( m_fuseOptions.isEmpty() ){

		m_fuseOptions = s.arg( f,ss,stype ) ;
	}else{
		m_fuseOptions = s.arg( f,ss,stype ) + "," + m_fuseOptions ;
	}
}
