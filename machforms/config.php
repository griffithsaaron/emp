<?php
/*
MachForm Configuration File
*/

/** MySQL settings **/
define('MF_DB_NAME', 'elementarymusicprograms'); //The name of your database. Note that this database must exist before running installer.php
define('MF_DB_USER', 'elementarymusicp'); //Your database username
define('MF_DB_PASSWORD', '98f0669a1019f613e841040fb298aafb'); //Your database users password
define('MF_DB_HOST', '10.0.0.254'); //The hostname for your database




/** YOU CAN LEAVE THE SETTINGS BELOW THIS LINE UNCHANGED **/

/** Optional Settings **/
/** All settings below this line are optionals, you can leave them as they are now **/
define('MF_TABLE_PREFIX', 'ap_'); //The prefix for all machform tables

//by default, deleting field from the form won't actually remove all the data within the table, so that we can manually recover it
//by setting this value to 'true' the data will be removed completely, unrecoverable
define('MF_CONF_TRUE_DELETE',false);

/** reCAPTCHA settings **/
/** Below is a global key. If you prefer to use your own reCAPTCHA key, get an API key from https://www.google.com/recaptcha/admin/create **/
define('RECAPTCHA_PUBLIC_KEY','6LdDtMcSAAAAAL0O2fhNlYObanlKlbQzSfYsdHRY');
define('RECAPTCHA_PRIVATE_KEY','6LdDtMcSAAAAACXVxR-niVXMe-5KnVQQkvaZP_dw');
define('RECAPTCHA_THEME','red'); //available themes: red, white, blackglass, clean
define('RECAPTCHA_LANGUAGE','en'); //available languages: en, nl, fr, de, pt, ru, es, tr

?>
