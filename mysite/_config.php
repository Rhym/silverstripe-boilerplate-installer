<?php

global $project;
$project = 'mysite';

/** Use the _ss_environment.php file for configuration */
require_once ('conf/ConfigureFromEnv.php');

/** Remove the auto generated SS_ prefix that gets added if database is auto detected */
global $databaseConfig;
$databaseConfig['database'] = str_replace('SS_', '', $databaseConfig['database']);

/** Set default language */
i18n::set_locale('en_US');

/** Force redirect to www */
//Director::forceWWW();

define('PROJECT_THIRDPARTY_DIR', project() . '/thirdparty');
define('PROJECT_THIRDPARTY_PATH', project() . '/' . PROJECT_THIRDPARTY_DIR);

/**
 * it is suggested to set SS_ERROR_LOG in _ss_environment.php to enable logging,
 * alternatively you can use the line below for your custom logging settings
 * SS_Log::add_writer(new SS_LogFileWriter('../silverstripe-errors.log'), SS_Log::ERR);
 */
if (!Director::isLive()) {
    /**
     * set settings that should only be in dev and test
     */
} else {
    /**
     * we are in live mode, send errors per email
     */
    SS_Log::add_writer(new SS_LogEmailWriter('myEmail@mysite.com'), SS_Log::ERR);
}

/** -----------------------------------------
 * HTMLEditorField
 *
 * Adding styles, and buttons
 * to the HTMLEditorField
-------------------------------------------*/

$formats = array(
    array(
        'title' => 'Heading - h1',
        'selector' => 'h1,h2,h3,h4,h5,h6',
        'classes' => 'h1',
        'wrapper' => false,
    ),
    array(
        'title' => 'Heading - h2',
        'selector' => 'h1,h2,h3,h4,h5,h6',
        'classes' => 'h2',
        'wrapper' => false,
    ),
    array(
        'title' => 'Heading - h3',
        'selector' => 'h1,h2,h3,h4,h5,h6',
        'classes' => 'h3',
        'wrapper' => false,
    ),
    array(
        'title' => 'Text - Primary',
        'inline' => 'span',
        'classes' => 'text--primary',
        'wrapper' => true,
        'merge_siblings' => false
    ),
    array(
        'title' => 'Text - Secondary',
        'inline' => 'span',
        'classes' => 'text--secondary',
        'wrapper' => true,
        'merge_siblings' => false
    ),
    array(
        'title' => 'Button - Default',
        'selector' => 'a, button',
        'classes' => 'btn--default',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Primary',
        'selector' => 'a, button',
        'classes' => 'btn--primary',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Secondary',
        'selector' => 'a, button',
        'classes' => 'btn--secondary',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Link',
        'selector' => 'a, button',
        'classes' => 'btn--link',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Bordered',
        'selector' => 'a, button',
        'classes' => 'btn--bordered',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Large',
        'selector' => 'a, button',
        'classes' => 'btn--lg',
        'wrapper' => false,
    ),
    array(
        'title' => 'Button - Small',
        'selector' => 'a, button',
        'classes' => 'btn--sm',
        'wrapper' => false,
    ),
    array(
        'title' => 'List - Checklist',
        'selector' => 'ul',
        'classes' => 'checklist',
        'wrapper' => false
    ),
    array(
        'title' => 'List - Deletelist',
        'selector' => 'ul',
        'classes' => 'delete-list',
        'wrapper' => false
    ),
    array(
        'title' => 'Table',
        'selector' => 'table',
        'classes' => 'table',
        'wrapper' => false
    ),
    array(
        'title' => 'Table - Responsive',
        'block' => 'div',
        'classes' => 'table-responsive',
        'wrapper' => true,
        'merge_siblings' => false
    )
);

HtmlEditorConfig::get('cms')->setOption('style_formats', $formats);
HtmlEditorConfig::get('cms')->setOption('theme_advanced_blockformats','p,h2,h3,h4');