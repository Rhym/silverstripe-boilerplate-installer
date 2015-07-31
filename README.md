##Install

Make sure you have [Composer](https://getcomposer.org/) and [NPM](https://www.npmjs.com/) installed.

Run the following:

```
composer create-project -s dev ryanpotter/silverstripe-boilerplate-installer myNewProject
```

##Enviroment

Create the following file in the root directory.

```
_ss_environment.php
```

Copy paste this biz, and change the values.

```
<?php

define('SS_DATABASE_SERVER', 'localhost');
define('SS_DATABASE_USERNAME', 'YOUR_DATABASE_USERNAME');
define('SS_DATABASE_PASSWORD', 'YOUR_DATABASE_PASSWORD');
define('SS_DATABASE_NAME', 'YOUR_DATABASE_NAME');
//define('SS_DATABASE_CHOOSE_NAME', 2);

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

## Contributing

### Code guidelines

This project follows the standards defined in:

* [PSR-0](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md)
* [PSR-1](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md)
* [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
