<?php

/**
 * Class SiteConfigExtension
 */
class SiteConfigExtension extends DataExtension {

    private static $db = array(
        'ShowAssetAdmin' => 'Boolean',
        'ShowSecurityAdmin' => 'Boolean',
        'ShowReportAdmin' => 'Boolean',
        'ShowHelpLink' => 'Boolean'
    );

    private static $defaults = array(
        'ShowAssetAdmin' => true,
        'ShowSecurityAdmin' => true,
        'ShowReportAdmin' => false,
        'ShowHelpLink' => false
    );

    /**
     * @param FieldList $fields
     */
    public function updateCMSFields(FieldList $fields) {

        /* =========================================
         * Settings
         =========================================*/

        if (!$fields->fieldByName('Root.Settings')){
            $fields->addFieldToTab('Root', new TabSet('Settings'));
        }

        /* =========================================
         * CMS
         =========================================*/

        $fields->findOrMakeTab('Root.Settings.CMS', 'CMS');
        $fields->addFieldsToTab('Root.Settings.CMS',
            array(
                new HeaderField('', 'CMS Menu'),
                new CheckboxField('ShowAssetAdmin'),
                new CheckboxField('ShowSecurityAdmin'),
                new CheckboxField('ShowReportAdmin'),
                new CheckboxField('ShowHelpLink')
            )
        );

    }

}