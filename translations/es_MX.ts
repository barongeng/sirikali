<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es_MX" sourcelanguage="en_US">
<context>
    <name>DialogMsg</name>
    <message>
        <location filename="../src/dialogmsg.ui" line="17"/>
        <source>Dialog</source>
        <translation>Diálogo</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.ui" line="29"/>
        <source>&amp;Ok</source>
        <translation>&amp;Ok</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.ui" line="42"/>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.ui" line="55"/>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.cpp" line="97"/>
        <source>INFORMATION</source>
        <translation>Información</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.cpp" line="237"/>
        <source>Do not show this dialog again</source>
        <translation>No mostrar este diálogo </translation>
    </message>
</context>
<context>
    <name>LXQt::Wallet::changePassWordDialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="112"/>
        <source>Create a new wallet</source>
        <translation>Crear una cartera nueva</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="114"/>
        <source>Create</source>
        <translation>Crear</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="142"/>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="278"/>
        <source>Passwords do not match</source>
        <translation>La contraseña.no coincide </translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="223"/>
        <source>Wallet password could not be changed</source>
        <translation>La contraseña de la cartera no puede ser cambiada</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="232"/>
        <source>Wallet could not be opened with the presented key</source>
        <translation>La cartera no se puede abrir con esa contraseña</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="242"/>
        <source>New passwords do not match</source>
        <translation>La nueva contraseña no coincide </translation>
    </message>
</context>
<context>
    <name>LXQt::Wallet::password_dialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.cpp" line="72"/>
        <source>Wallet could not be opened with the presented key</source>
        <translation>La cartera no se puede abrir con esa contraseña</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/checkforupdates.cpp" line="82"/>
        <source>%1&quot;%2&quot; Installed Version Is : %3.
Latest Version Is : %4.</source>
        <translation>%1&quot;%2&quot; ersión instalada : %3.
 última versión: %4.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1057"/>
        <location filename="../src/sirikali.cpp" line="1073"/>
        <source>ERROR</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1058"/>
        <source>Failed To Find %1 Executable</source>
        <translation>No se pudo encontrar %1 Ejecutable</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1071"/>
        <source>INFORMATION</source>
        <translation>Información</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1074"/>
        <source>Failed To Get Volume Properties</source>
        <translation>Error al obtener las propiedades del volumen</translation>
    </message>
    <message>
        <source>Version Info</source>
        <translation type="vanished">Información de la versión</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="41"/>
        <source>Kde Wallet</source>
        <translation>Cartera Kde</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="46"/>
        <source>Internal Wallet</source>
        <translation>Cartera interna</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="51"/>
        <source>Gnome Wallet</source>
        <translation>Cartera Gnome</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="56"/>
        <source>OSX KeyChain</source>
        <translation>OSX KeyChain</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1218"/>
        <source>Not Supported KeyFile Encountered Since It Contains AtLeast One Illegal Character(&apos;\n&apos;,&apos;\0&apos;,&apos;\r&apos;).

Please Use a Hash Of The KeyFile Through &quot;HMAC+KeyFile&quot; Option.</source>
        <translation>Archivo de contraseña no soportado. Contiene al menos un caracter ilegal(&apos;\n&apos;,&apos;\0&apos;,&apos;\r&apos;).

Please Use a Hash Of The KeyFile Through &quot;HMAC+KeyFile&quot; Option.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1269"/>
        <source>Effective Key Is Generated With Below Formula:

key = hmac_sha256(password,keyfile contents)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="456"/>
        <source>
options:
	-d   Path to where a volume to be auto unlocked/mounted is located.
	-m   Tool to use to open a default file manager(default tool is xdg-open).
	-e   Start the application without showing the GUI.
	-b   A name of a backend to retrieve a password from when a volume is open from CLI.
	     Supported backends are: &quot;internal&quot;,&quot;stdin&quot;,&quot;keyfile&quot;,&quot;osxkeychain&quot;,&quot;kwallet&quot; and &quot;libsecret&quot;.
	     The first three are always present but the rest are compile time dependencies.
	     &quot;internal&quot; option causes SiriKali to read password from lxqt-wallet internal backend.
	     &quot;stdin&quot; option causes SiriKali to read the password from standard input.
	     &quot;keyfile&quot; option causes SiriKali to read the password from a file.
	     &quot;libsecret&quot; option causes SiriKali to read password from lxqt-wallet libsecret backend.
	     &quot;kwallet&quot; option causes SiriKali to read password from lxqt-wallet kwallet backend.
	     &quot;osxkeychain&quot; option causes SiriKali to read password from lxqt-wallet OSX key chain backend.
	-k   When opening a volume from CLI,a value of &quot;rw&quot; will open the volume in read\write
	     mode and a value of &quot;ro&quot; will open the volume in read only mode.
	-z   Full path of the mount point to be used when the volume is opened from CLI.
	     This option is optional.
	-c   Set Volume Configuration File Path when a volume is opened from CLI.
	-i   Set inactivity timeout(in minutes) to dismount the volume when mounted from CLI.
	-o   Set mount options when mounting a volume from CLI.
	-f   Path to keyfile.
	-u   Unmount volume.
	-p   Print a list of unlocked volumes.
	-s   Option to trigger generation of password hash.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="797"/>
        <source>Manage Favorites</source>
        <translation>Administrar Favoritos</translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="798"/>
        <source>Mount All</source>
        <translation>Mount All</translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="824"/>
        <source>about SiriKali</source>
        <translation>Acerca de SiriKali</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1273"/>
        <source>This plugin delegates key generation to an external application</source>
        <translation>Esta extension delega la generacion de contrasenas a una aplicion externa</translation>
    </message>
</context>
<context>
    <name>changePassWordDialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="17"/>
        <source>Change Wallet&apos;s Password</source>
        <translation>Cambia la contraseña de la cartera </translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="45"/>
        <source>C&amp;hange</source>
        <translation>C&amp;hange</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="58"/>
        <source>&amp;Ok</source>
        <translation>&amp;Ok</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="129"/>
        <source>Enter Current Password Below.</source>
        <translation>Introduzca la contraseña actual.</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="148"/>
        <source>Enter New Password Below.</source>
        <translation>Introduzca una contraseña nueva.</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="167"/>
        <source>Re Enter New Password Below.</source>
        <translation>Introduzca la contraseña nuevamente.</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="186"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar </translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="199"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;An application &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; has made a request for a password of its wallet &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; to be changed&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Una aplicacion &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; Ha hecho una solicitud de una contraseña de su cartera &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; Se cambiara/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="217"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Enter password information below to create a new wallet &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; for application &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Intriduzca contrasena para crear una nueva cartera&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; para la aplicacion &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>checkUpdates</name>
    <message>
        <location filename="../src/checkforupdates.cpp" line="36"/>
        <source>Network Request Failed To Respond Within %1 Seconds.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/checkforupdates.cpp" line="38"/>
        <source>ERROR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/checkforupdates.cpp" line="107"/>
        <location filename="../src/checkforupdates.cpp" line="110"/>
        <source>Version Info</source>
        <translation type="unfinished">Información de la versión</translation>
    </message>
</context>
<context>
    <name>configFileOption</name>
    <message>
        <location filename="../src/configfileoption.ui" line="14"/>
        <source>Set Config File Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configfileoption.ui" line="26"/>
        <source>&amp;Set</source>
        <translation type="unfinished">&amp;Set</translation>
    </message>
    <message>
        <location filename="../src/configfileoption.ui" line="39"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configfileoption.ui" line="78"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>configOptions</name>
    <message>
        <location filename="../src/configoptions.ui" line="14"/>
        <source>Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="30"/>
        <source>General Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="42"/>
        <source>Auto Open Mount Point</source>
        <translation>Abrir automaticamente Mount Point</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="55"/>
        <source>Re Use Mount Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="68"/>
        <source>Auto Check For Updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="81"/>
        <source>Start Minimized</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="94"/>
        <source>Select Language</source>
        <translation>Selecionar idioma</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="100"/>
        <source>AutoMount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="194"/>
        <source>&amp;KWallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="220"/>
        <source>&amp;None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="253"/>
        <source>Editable Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="346"/>
        <source>Set External Plugin Executable</source>
        <translation type="unfinished">Establecer pluging ejecutable externo </translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="362"/>
        <source>Set Command To Run After Mount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="398"/>
        <source>Set Command To Run Before UnMount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage Favorites</source>
        <translation type="vanished">Administrar Favoritos</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="112"/>
        <source>Auto Mount Favorites Volumes At Startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="125"/>
        <source>Auto Mount Favorites Volumes When Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="138"/>
        <source>Show Mount Dialog When Auto Mounting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="144"/>
        <source>Manage Keys In Wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="156"/>
        <source>Set Default Wallet To Retrieve Volume Keys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="168"/>
        <location filename="../src/configoptions.cpp" line="144"/>
        <source>Internal Wallet</source>
        <translation>Cartera interna</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="181"/>
        <source>&amp;Libsecret</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="162"/>
        <source>KWallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="207"/>
        <source>&amp;MACOS Keychain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="vanished">Ninguno</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="234"/>
        <source>Change Internal Wallet Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="247"/>
        <source>&amp;Key Storage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="265"/>
        <source>Set File Manager</source>
        <translation>Establecer administrador de archivos</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="314"/>
        <source>Set Mount Point Prefix</source>
        <translation>Establecer prefijo de punto de montaje</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="416"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="155"/>
        <source>Libsecret</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="169"/>
        <source>MACOS Keychain</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>cryfscreateoptions</name>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="14"/>
        <source>Select Volume Creation Options</source>
        <translation>Selecione opciones de creacion de volumen</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="36"/>
        <source>Cipher To Use For Encryption.</source>
        <translation>Cifrado a utilizar en el encriptado.</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="55"/>
        <source>Cipher Text Block Size In Bytes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="81"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="94"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="107"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>dialogok</name>
    <message>
        <location filename="../src/dialogok.ui" line="17"/>
        <source>Dialog</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/dialogok.ui" line="29"/>
        <source>&amp;Ok</source>
        <translation>&amp;Ok</translation>
    </message>
    <message>
        <location filename="../src/dialogok.ui" line="67"/>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <location filename="../src/dialogok.ui" line="80"/>
        <source>&amp;No</source>
        <translation>&amp;No</translation>
    </message>
</context>
<context>
    <name>favorites</name>
    <message>
        <location filename="../src/favorites.ui" line="17"/>
        <source>Manage Favorites</source>
        <translation>Administrar Favoritos</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="91"/>
        <source>Config File Path (Optional)</source>
        <translation>Configurar ruta del archivo (opcional)</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="107"/>
        <source>Idle TimeOut (Optional)</source>
        <translation>Idle TimeOut (Optional)</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="196"/>
        <source>Mount Options</source>
        <translation>Opciones de montaje</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="207"/>
        <source>Auto Mount Volume</source>
        <translation>uto Mount Volume</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="120"/>
        <source>&amp;Add</source>
        <translation>&amp;Agregar</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="156"/>
        <source>Volume ID</source>
        <translation>ID del volumen</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="164"/>
        <source>Mount Point</source>
        <translation>Mount Point</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="172"/>
        <source>Auto Mount</source>
        <translation>Auto Mount</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="180"/>
        <source>Config File Path</source>
        <translation>Configurar directorio de archivo</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="188"/>
        <source>Idle Time Out</source>
        <translation>Tiempo de inactividad</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="214"/>
        <source>Mount Options (Optional And Comma Separated)</source>
        <translation>Opciones de montaje (opcional y separado por comas)</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="26"/>
        <source>Encrypted Folder Path</source>
        <translation>Ruta de folder encriptada</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="58"/>
        <source>Mount Point Path</source>
        <translation>Camino del punto de montaje</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="48"/>
        <source>open file dialog</source>
        <translation>Abrir archivo de dialogo</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="130"/>
        <source>&amp;Done</source>
        <translation>&amp;Hecho</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="205"/>
        <source>Toggle AutoMount</source>
        <translation>Toggle AutoMount</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="210"/>
        <source>Remove Selected Entry</source>
        <translation>Remover entrada seleccionada</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="215"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="303"/>
        <location filename="../src/favorites.cpp" line="307"/>
        <location filename="../src/favorites.cpp" line="313"/>
        <source>ERROR!</source>
        <translation>ERROR!</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="303"/>
        <source>Encrypted Folder Address Field Is Empty</source>
        <translation>El campo de dirección de carpeta cifrada está vacío</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="307"/>
        <source>Mount Point Path Field Is Empty</source>
        <translation>El campo de ruta de punto de montaje está vacío</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="313"/>
        <source>Mount Options Can Not Contain &quot;-&quot;</source>
        <translation>Las opciones de montaje no pueden contener &quot;-&quot;</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="358"/>
        <source>Path To A Config File</source>
        <translation>Directorio para configurar archivo</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="387"/>
        <source>Path To An Encrypted Folder</source>
        <translation>Direcciorio de un folder encriptado</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="397"/>
        <source>Path To Mount Folder</source>
        <translation>Camino para montar la carpeta</translation>
    </message>
</context>
<context>
    <name>fileManager</name>
    <message>
        <location filename="../src/filemanager.ui" line="14"/>
        <location filename="../src/filemanager.cpp" line="49"/>
        <source>Set File Manager</source>
        <translation>Establecer administrador de archivos</translation>
    </message>
    <message>
        <location filename="../src/filemanager.ui" line="26"/>
        <source>TextLabel</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <location filename="../src/filemanager.ui" line="55"/>
        <source>&amp;Set</source>
        <translation>&amp;Set</translation>
    </message>
    <message>
        <location filename="../src/filemanager.cpp" line="40"/>
        <source>Enter Below The Name Of The Application You Want To Be Used To Open Mount Points.</source>
        <translation>ntroduzca el nombre de la aplicación que desea utilizar para abrir puntos de montaje.</translation>
    </message>
    <message>
        <location filename="../src/filemanager.cpp" line="51"/>
        <source>Set Executable For &quot;ExternalExecutable&quot; Plugin</source>
        <translation>Establecer ejecutable para Plugin &quot;Externalejecutable &quot;</translation>
    </message>
    <message>
        <location filename="../src/filemanager.cpp" line="53"/>
        <source>Enter Below The Name Of The External Executable And Its Arguments To Use When Invoking &quot;ExternalExecutable&quot; Plugin.</source>
        <translation>Introduzca el nombre del ejecutable externo y sus argumentos para utilizar al invocar el complemento &quot;ExternalExecutable&quot;.</translation>
    </message>
</context>
<context>
    <name>gocryptfscreateoptions</name>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="14"/>
        <source>Select Volume Creation Options</source>
        <translation type="unfinished">Selecione opciones de creacion de volumen</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="36"/>
        <source>Cipher To Use For File Contents Encryption.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="55"/>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="68"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="81"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="138"/>
        <source>Encrypt File Na&amp;mes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="151"/>
        <source>Do &amp;Not Encrypt File Names</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>help</name>
    <message>
        <location filename="../src/help.ui" line="14"/>
        <source>FAQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/help.ui" line="26"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/help.ui" line="54"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Noto Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;1.0 How do i change the default mount point prefix?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;By default,SiriKali uses a mount point prefix of &amp;quot;~/.SiriKali.tmp/&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;You can change it to something else by clicking &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Editable Options-&amp;gt;Set Mount Point Prefix&amp;quot; option and then set a folder you want to be used as a default mount point prefix.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-20-how-do-i-set-custom-mount-point-path-for-my-volume&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;2&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i set custom mount point path for my volume?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Unique custom mount point path can be used through adding a volume to the favorites list and then setting custom mount point path in the &amp;quot;mount point path&amp;quot; field.The volume should then be accessed through the favorites list.&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Favorites list is access through Menu-&amp;gt;Favorites-&amp;gt;Manage Favorites.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-30-how-do-i-start-the-application-minimized&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;3&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i start the application minimized?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Start the application with &amp;quot;-e&amp;quot; option or set it through GUI by setting &amp;quot;Menu-&amp;gt;Settings-&amp;gt;General Options-&amp;gt;Start Minimized&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-40-what-does-different-key-options-means-in-the-dialog-for-creatingunlocking-volume&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;4&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 What does different key options means in the dialog for creating/unlocking volume?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Key&amp;quot; entry means the password you enter will be used to create/unlock the volume.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;KeyFile&amp;quot; entry means the contents of a specified file will be used as a password to create/unlock the volume. This option is not very safe as the file contents will most likely be truncated on the first encountered new line character making effective password not as strong as expected. It is advised to use one of the next two options if a key file is to be used.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;HMAC+KeyFile&amp;quot; entry means the effective password will be a combination of key file contents and an empty password. The effective password will be produced with the following formula: password = hmac_sha256( key file contents,empty password ).&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Key+KeyFile&amp;quot; entry means the effective password will be a combination of key file contents and a password. The effective password will be produced with the following formula: password = hmac_sha256( key file contents,password ).&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Internal Wallet&amp;quot; entry means the effective password will be retrieved from LXQt internal secure storage system. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;KDE Wallet&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through KDE&apos;s KWallet backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;GNOME Wallet&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through libsecret backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;OSX keychain&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through OSX keychain backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;&lt;/ol&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-50-what-directories-does-sirikali-check-for-its-backend-executables&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;5&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 What directories does SiriKali check for its backend executables?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Backend executables are searched in the following directories with the first entry searched first and the last entry searched last: &amp;quot;/usr/local/bin/&amp;quot;,&amp;quot;/usr/local/sbin/&amp;quot;,&amp;quot;/usr/bin/&amp;quot;,&amp;quot;/usr/sbin/&amp;quot;,&amp;quot;/bin/&amp;quot;,&amp;quot;/sbin/&amp;quot;, &amp;quot;/opt/local/bin&amp;quot;,&amp;quot;/opt/local/sbin&amp;quot;,&amp;quot;/opt/bin&amp;quot;,&amp;quot;/opt/sbin&amp;quot;,&amp;quot;~/bin&amp;quot;,&amp;quot;~/.bin&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-60-how-do-i-unlock-a-volume-through-a-favorite-entry-without-invoking-a-wallet&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;6&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i unlock a volume through a favorite feature without invoking a wallet?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Disable the feature by setting an option through &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets-&amp;gt;none&amp;quot;&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-70-how-do-i-unlock-a-volume-through-a-favorite-entry-using-a-key-in-a-wallet-and-without-showing-mount-dialog-prompt&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;7&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i unlock a volume through a favorite feature using a key in a wallet and without showing mount dialog prompt?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Set your preferred password storage system at &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets&amp;quot;.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Unset &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Auto Mount-&amp;gt;Show Mount Dialog When Auto Mounting&amp;quot;.&lt;/li&gt;&lt;/ol&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-80-how-do-i-add-a-key-to-a-secured-storage-system&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;8&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i add a key to a secured storage system?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Click &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets-&amp;gt;Key Storage&amp;quot; and then select your preferred key storage system.&lt;/li&gt;
&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;On the dialog window that shows up,click &amp;quot;Add&amp;quot;.&lt;/li&gt;
&lt;li style=&quot; margin-top:0px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;On the dialog window that shows up,add your password in the appropriate fields. &amp;quot;Volume ID&amp;quot; is the full path to the encrypted volume folder. Click the button to the right of the field to invoke file dialog window where you will get the opportunity to browse to where the folder is to select it.&lt;/li&gt;&lt;/ol&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/help.ui" line="99"/>
        <source>Open &amp;PDF</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>keyDialog</name>
    <message>
        <location filename="../src/keydialog.ui" line="29"/>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="45"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="58"/>
        <location filename="../src/keydialog.cpp" line="209"/>
        <location filename="../src/keydialog.cpp" line="1249"/>
        <location filename="../src/keydialog.cpp" line="1389"/>
        <source>Key</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="100"/>
        <location filename="../src/keydialog.cpp" line="179"/>
        <source>Volume Name</source>
        <translation>Nombre del volumen</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="142"/>
        <source>Mount In &amp;Read Only Mode</source>
        <translation>&amp;Modo de montaje en modo de sólo lectura</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="220"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="290"/>
        <source>Set Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="303"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="358"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="387"/>
        <source>TextLabel</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="155"/>
        <source>O&amp;ptions</source>
        <translation>O&amp;ptiones</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="188"/>
        <source>Volume Path</source>
        <translation>Ruta del volumen</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="177"/>
        <source>&amp;Create</source>
        <translation>&amp;Crear</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="189"/>
        <location filename="../src/keydialog.cpp" line="373"/>
        <source>Unlocking &quot;%1&quot;</source>
        <translation>Desbloqueando&quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="191"/>
        <source>Mount Path</source>
        <translation>Ruta del montaje</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="339"/>
        <location filename="../src/keydialog.cpp" line="210"/>
        <location filename="../src/keydialog.cpp" line="1000"/>
        <location filename="../src/keydialog.cpp" line="1255"/>
        <location filename="../src/keydialog.cpp" line="1354"/>
        <source>KeyFile</source>
        <translation>KeyFile</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="212"/>
        <location filename="../src/keydialog.cpp" line="1290"/>
        <source>HMAC+KeyFile</source>
        <translation>HMAC+KeyFile</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="211"/>
        <location filename="../src/keydialog.cpp" line="1263"/>
        <location filename="../src/keydialog.cpp" line="1267"/>
        <location filename="../src/keydialog.cpp" line="1368"/>
        <source>Key+KeyFile</source>
        <translation>Contrasena+archivo de contrasena</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="213"/>
        <location filename="../src/keydialog.cpp" line="1263"/>
        <source>ExternalExecutable</source>
        <translation>Ejecutable externo</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="253"/>
        <source>Check This Box To Make Password Visible</source>
        <translation>Selecciona para mostrar la contraseña </translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="271"/>
        <source>(%1/%2) Unlocking &quot;%3&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="397"/>
        <source>Create A New &quot;%1&quot; Volume</source>
        <translation>Crear un nuevo volumen &quot;%1&quot; </translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="496"/>
        <source>Passphrase Quality: 0%</source>
        <translation>Calidad de la contraseña: 0%</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="498"/>
        <source>Passphrase Quality: %1%</source>
        <translation>Calidad de la contraseña: %1%</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="503"/>
        <location filename="../src/keydialog.cpp" line="1317"/>
        <source>Passphrase Quality: 100%</source>
        <translation>Calidad de la contraseña: 100%</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="554"/>
        <location filename="../src/keydialog.cpp" line="567"/>
        <source>Select A Folder To Create A Mount Point In.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="664"/>
        <location filename="../src/keydialog.cpp" line="678"/>
        <source>Select A File To Be Used As A Keyfile.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="704"/>
        <source>Volume Name Field Is Empty.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="713"/>
        <source>Key Field Is Empty.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="766"/>
        <source>Internal Wallet Is Not Configured.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="811"/>
        <source>Failed To Unlock A Cryfs Volume.
Wrong Password Entered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="816"/>
        <source>Failed To Unlock An Encfs Volume.
Wrong Password Entered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="821"/>
        <source>Failed To Unlock A Gocryptfs Volume.
Wrong Password Entered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="826"/>
        <source>Failed To Unlock An Ecryptfs Volume.
Wrong Password Entered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="831"/>
        <source>A Space Character Is Not Allowed In Paths When Using Ecryptfs Backend And Polkit.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="836"/>
        <source>This Backend Requires Root&apos;s Privileges And An attempt To Acquire Them Has Failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="841"/>
        <source>Failed To Unlock A Securefs Volume.
Wrong Password Entered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="846"/>
        <source>Failed To Complete The Request.
Cryfs Executable Could Not Be Found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="851"/>
        <source>SiriKali Can Not Unlock This Volume Because Its FileSystem Has To Manually Be Converted To The Version Of Cryfs That Is Currently In Use.

Run Cryfs With This Volume To Manually Update This Volume&apos;s FileSystem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="856"/>
        <source>Failed To Complete The Request.
Encfs Executable Could Not Be Found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="861"/>
        <source>Failed To Complete The Request.
Ecryptfs-simple Executable Could Not Be Found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="866"/>
        <source>Failed To Complete The Request.
Gocryptfs Executable Could Not Be Found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="871"/>
        <source>Failed To Complete The Request.
Securefs Executable Could Not Be Found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="876"/>
        <source>Failed To Create Mount Point.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="881"/>
        <source>Failed To Unlock The Volume.
Not Supported Volume Encountered.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="888"/>
        <source>Failed To Complete The Task And Below Log was Generated By The Backend.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1040"/>
        <source>Failed To Generate Key.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1294"/>
        <source>Select A KeyFile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="949"/>
        <source>Encrypted Folder Path Is Already Taken.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="958"/>
        <location filename="../src/keydialog.cpp" line="1110"/>
        <source>Mount Point Path Already Taken.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="965"/>
        <location filename="../src/keydialog.cpp" line="1099"/>
        <location filename="../src/keydialog.cpp" line="1124"/>
        <source>Atleast One Required Field Is Empty.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1117"/>
        <source>Encrypted Folder Appear To Not Be Present.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1366"/>
        <location filename="../src/keydialog.cpp" line="1378"/>
        <source>Plugin name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1403"/>
        <source>Keyfile path</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>oneinstance</name>
    <message>
        <location filename="../src/oneinstance.cpp" line="69"/>
        <source>Previous instance seem to have crashed,trying to clean up before starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/oneinstance.cpp" line="76"/>
        <source>There seem to be another instance running,exiting this one</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>options</name>
    <message>
        <location filename="../src/options.ui" line="17"/>
        <source>Set Mount Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="80"/>
        <source>Unlock A Cryfs/Gocryptfs/Securefs Volume With Specified Configuration File.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="109"/>
        <source>Automatically Unmount After Specified Minutes of Inactivity Is Reached.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="138"/>
        <source>Mount The Volume With Below Mount Options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="157"/>
        <source>&amp;Set</source>
        <translation>&amp;Set</translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="170"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.cpp" line="139"/>
        <source>Select Cryfs/Gocryptfs Configuration File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.cpp" line="171"/>
        <source>ERROR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/options.cpp" line="171"/>
        <source>Idle Time Field Requires Digits Only If Not Empty.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>password_dialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="17"/>
        <source>lxqt wallet service</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="45"/>
        <source>The application &apos;%1&apos; has requested to open the wallet &apos;%2&apos;.Enter the password below for this wallet to unlock it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="77"/>
        <source>Wallet &apos;%1&apos; does not exist,do you want to create it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="93"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Wallet &lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&apos;%1&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; does not exist, do you want to create it?&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="110"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;An application &lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&apos;%1&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; has requested to open a wallet&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt; &apos;%2&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;. Enter the password below for this wallet to unlock it.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="127"/>
        <source>&amp;Unlock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="144"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="157"/>
        <source>ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="170"/>
        <source>&amp;Ok</source>
        <translation type="unfinished">&amp;Ok</translation>
    </message>
</context>
<context>
    <name>plugin</name>
    <message>
        <location filename="../src/plugin.ui" line="17"/>
        <source>Key Generator Using A Passphrase And A KeyFile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="29"/>
        <source>&amp;Set Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="42"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="113"/>
        <source>Passphrase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="142"/>
        <location filename="../src/plugin.cpp" line="163"/>
        <source>KeyFile</source>
        <translation type="unfinished">KeyFile</translation>
    </message>
    <message>
        <location filename="../src/plugin.cpp" line="113"/>
        <location filename="../src/plugin.cpp" line="152"/>
        <source>ERROR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugin.cpp" line="113"/>
        <source>KeyFile Not Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/plugin.cpp" line="152"/>
        <source>Failed To Generate Key</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>readOnlyWarning</name>
    <message>
        <location filename="../src/readonlywarning.ui" line="17"/>
        <source>WARNING</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/readonlywarning.ui" line="29"/>
        <source>Do Not Show This Message Again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/readonlywarning.ui" line="42"/>
        <source>Setting This Option Will Cause The Volume To Open In Read Only Mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/readonlywarning.ui" line="61"/>
        <source>&amp;Ok</source>
        <translation type="unfinished">&amp;Ok</translation>
    </message>
</context>
<context>
    <name>securefscreateoptions</name>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="14"/>
        <source>Choose Format Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="29"/>
        <source>The &quot;lite format&quot; simply encrypts filenames and file contents separately, similar to how encfs operates, although with more security.

The &quot;full format&quot; maps files, directories and symlinks in the virtual filesystem all to regular files in the underlying filesystem. The directory structure is flattened and recorded as B-trees in files.

The lite format has become the default on Unix-like operating systems as it is much faster and features easier conflict resolution, especially when used with DropBox, Google Drive, etc. The full format, however, leaks fewer information about the filesystem hierarchy, runs relatively independent of the features of the underlying filesystem, and is in general more secure.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="50"/>
        <source>Lite Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="55"/>
        <source>Full Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="69"/>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="82"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="95"/>
        <source>Select A Folder To Create Config File In.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>sirikali</name>
    <message>
        <location filename="../src/sirikali.ui" line="17"/>
        <source>SiriKali</source>
        <translation>SiriKali</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="55"/>
        <source>Volume Path</source>
        <translation>Directorio del Volumen </translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="63"/>
        <source>Mount Point Path</source>
        <translation>Ubicación del archivo</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="71"/>
        <source>File System</source>
        <translation>Archivo del sistema</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="79"/>
        <source>Mode</source>
        <translation>Modo</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="95"/>
        <source>&amp;Create Volume</source>
        <translation>&amp;Crear volumen</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="108"/>
        <source>Mount &amp;Volume</source>
        <translation>Montaje de &amp;Volumen</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="115"/>
        <source>&amp;Refresh</source>
        <translation>&amp;Actualizar</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="129"/>
        <source>&amp;Menu</source>
        <translation>&amp;Menu</translation>
    </message>
    <message>
        <source>Auto Open Mount Point</source>
        <translation type="vanished">Abrir automaticamente Mount Point</translation>
    </message>
    <message>
        <source>Reuse Mount Point</source>
        <translation type="vanished">Reutilizar punto de montaje</translation>
    </message>
    <message>
        <source>Autocheck For Updates</source>
        <translation type="vanished">automática automática de actualizaciones</translation>
    </message>
    <message>
        <source>Set Mount Point Prefix</source>
        <translation type="vanished">Establecer prefijo de punto de montaje</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="330"/>
        <source>Unmount All</source>
        <translation></translation>
    </message>
    <message>
        <source>Internal Wallet</source>
        <translation type="vanished">Cartera interna</translation>
    </message>
    <message>
        <source>Change Password</source>
        <translation type="vanished">Cambiar contraseña</translation>
    </message>
    <message>
        <source>Key Storage</source>
        <translation type="vanished">Almacenamiento de contraseñas</translation>
    </message>
    <message>
        <source>KDE Wallet</source>
        <translation type="vanished">Cartera KDE</translation>
    </message>
    <message>
        <source>Gnome Wallet</source>
        <translation type="vanished">Cartera Gnome</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="122"/>
        <location filename="../src/sirikali.cpp" line="336"/>
        <source>Favorites</source>
        <translation>Favoritos </translation>
    </message>
    <message>
        <source>Select Language</source>
        <translation type="vanished">Selecionar idioma</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="327"/>
        <source>Check For Updates</source>
        <translation>Revisar si hay actualizaciones</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="343"/>
        <source>About</source>
        <translation>Acerca</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="350"/>
        <source>Quit</source>
        <translation>Salir </translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="347"/>
        <source>Show/Hide</source>
        <translation>Mostrar/Ocultar</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="340"/>
        <source>Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manage Favorites</source>
        <translation type="vanished">Administrar Favoritos</translation>
    </message>
    <message>
        <source>Mount All</source>
        <translation type="vanished">Mount All</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="595"/>
        <source>ERROR: Volume Path Not Given.</source>
        <translation>ERROR:En el direcctorio del volumen.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="696"/>
        <source>ERROR: Key Not Found In The Backend.</source>
        <translation>ERROR: Contraseña no encontrada.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="701"/>
        <source>ERROR: Failed To Unlock Requested Backend.</source>
        <translation>ERROR: Error al desbloquear el backend solicitado.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="466"/>
        <location filename="../src/sirikali.cpp" line="514"/>
        <location filename="../src/sirikali.cpp" line="897"/>
        <location filename="../src/sirikali.cpp" line="1355"/>
        <location filename="../src/sirikali.cpp" line="1461"/>
        <source>ERROR</source>
        <translation>ERROR</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="897"/>
        <source>Failed To Read Volume Properties</source>
        <translation>Error al leer las propiedades del directorio</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="856"/>
        <location filename="../src/sirikali.cpp" line="902"/>
        <source>INFORMATION</source>
        <translation>Información</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="194"/>
        <location filename="../src/sirikali.cpp" line="196"/>
        <source>%1 Is Not Installed</source>
        <translation>%1 No instalado</translation>
    </message>
    <message>
        <source>OSX KeyChain</source>
        <translation type="vanished">OSX KeyChain</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="vanished">Ninguno</translation>
    </message>
    <message>
        <source>Enable Polkit Support</source>
        <translation type="vanished">Activar ayuda de Polkit</translation>
    </message>
    <message>
        <source>Set File Manager</source>
        <translation type="vanished">Establecer administrador de archivos</translation>
    </message>
    <message>
        <source>Set External Plugin Executable</source>
        <translation type="vanished">Establecer pluging ejecutable externo </translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="333"/>
        <source>Unmount All And Quit</source>
        <translation>Desmontar todo y salir</translation>
    </message>
    <message>
        <source>AutoMount Favorites</source>
        <translation type="vanished">Conectar aumaticamente favoritos </translation>
    </message>
    <message>
        <source>AutoMount Key Source</source>
        <translation type="vanished">AutoMount Key Source</translation>
    </message>
    <message>
        <source>AutoMount Favorite Volumes At Start Up</source>
        <translation type="vanished">Volúmenes favoritos de montaje automatico al inicio</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="345"/>
        <source>FAQ</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="466"/>
        <source>SiriKali Failed To Connect To siriPolkit.
Please Report This Serious Bug.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="514"/>
        <source>&quot;%1&quot; Folder Must Be Writable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="941"/>
        <source>Block Size: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="942"/>
        <source>Used Blocks: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="943"/>
        <source>Free Blocks: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="944"/>
        <source>Total Blocks %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="945"/>
        <source>Used Space: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="946"/>
        <source>Free Space: %6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="947"/>
        <source>Total Space: %7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="948"/>
        <source>Used %: %8</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1130"/>
        <source>Unmount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1128"/>
        <source>Open Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1132"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1169"/>
        <source>Close Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1221"/>
        <source>WARNING</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1222"/>
        <source>Could Not Open Mount Point Because &quot;%1&quot; Tool Does Not Appear To Be Working Correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1269"/>
        <source>&amp;Quit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1356"/>
        <source>Permission To Access The Volume Was Denied
Or
The Volume Is Not Supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1376"/>
        <source>Select An Encrypted Volume Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1461"/>
        <source>Failed To Unmount %1 Volume</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>walletconfig</name>
    <message>
        <location filename="../src/walletconfig.ui" line="17"/>
        <source>Manage Volumes In A Wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="32"/>
        <source>&amp;Add</source>
        <translation>&amp;Agregar</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="51"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="64"/>
        <source>Do&amp;ne</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="111"/>
        <source>Volume ID</source>
        <translation>ID del volumen</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="116"/>
        <source>Comment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="106"/>
        <source>Delete Entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="119"/>
        <source>WARNING!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="119"/>
        <source>Are you sure you want to delete a volume with an id of &quot;%1&quot;?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="203"/>
        <source>ERROR!</source>
        <translation>ERROR</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="203"/>
        <source>Failed To Add the Key In The Wallet.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>walletconfiginput</name>
    <message>
        <location filename="../src/walletconfiginput.ui" line="17"/>
        <source>Add An Entry To Wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="29"/>
        <source>&amp;Add</source>
        <translation>&amp;Agregar</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="42"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="64"/>
        <source>Volume ID</source>
        <translation>ID del volumen</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="83"/>
        <source>Comment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="102"/>
        <source>Key</source>
        <translation>Contraseña</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="121"/>
        <source>Repeat Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="102"/>
        <location filename="../src/walletconfiginput.cpp" line="109"/>
        <source>ERROR!</source>
        <translation>ERROR</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="102"/>
        <source>Atleast one required field is empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="109"/>
        <source>Passphrases do not match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="132"/>
        <source>Select A Volume</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>