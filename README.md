##Clone

```
git clone https://github.com/Rhym/silverstripe-boilerplate-installer.git "myNewProject"
cd myNewProject/
composer update
```

##Enviroment
```
_ss_environment.php
```

```
<?php

define('SS_DATABASE_SERVER', 'localhost');
define('SS_DATABASE_USERNAME', 'YOUR_DATABASE_USERNAME');
define('SS_DATABASE_PASSWORD', 'YOUR_DATABASE_PASSWORD');
// define('SS_DATABASE_NAME', 'YOUR_DATABASE_NAME');
define('SS_DATABASE_CHOOSE_NAME', 2);

define('SS_ENVIRONMENT_TYPE', 'dev');
define('SS_ERROR_LOG', '/silverstripe.log');

define('SS_DEFAULT_ADMIN_USERNAME', 'YOUR_EMAIL');
define('SS_DEFAULT_ADMIN_PASSWORD', 'YOUR_PASSWORD');

ini_set('display_errors', 1);

global $_FILE_TO_URL_MAPPING;
$_FILE_TO_URL_MAPPING['/var/www/'] = 'http://127.0.0.1';

if (defined('SS_ENVIRONMENT_TYPE') && SS_ENVIRONMENT_TYPE != 'live') {
    // turn on display_errors if we are in dev
    // NOTE: no need for setting error_reporting, this is done by SilverStripe
    ini_set('display_errors', 1);
}
```
