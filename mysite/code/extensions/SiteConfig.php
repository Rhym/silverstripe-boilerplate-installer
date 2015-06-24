<?php

/**
 * Class SiteConfigExtension
 *
 * @property boolean ShowAssetAdmin
 * @property boolean ShowSecurityAdmin
 * @property boolean ShowReportAdmin
 * @property boolean ShowHelpLink
 */
class SiteConfigExtension extends DataExtension {

    private static $db = array(
        'ShowAssetAdmin'    => 'Boolean',
        'ShowSecurityAdmin' => 'Boolean',
        'ShowReportAdmin'   => 'Boolean',
        'ShowHelpLink'      => 'Boolean'
    );

    private static $defaults = array(
        'ShowAssetAdmin'    => true,
        'ShowSecurityAdmin' => true,
        'ShowReportAdmin'   => false,
        'ShowHelpLink'      => false
    );

    /**
     * @param FieldList $fields
     */
    public function updateCMSFields(FieldList $fields) {

        /** -----------------------------------------
         * Settings
        -------------------------------------------*/

        if (!$fields->fieldByName('Root.Settings')){
            $fields->addFieldToTab('Root', TabSet::create('Settings'));
        }

        /** -----------------------------------------
         * CMS
        -------------------------------------------*/

        $fields->findOrMakeTab('Root.Settings.CMS', 'CMS');
        $fields->addFieldsToTab('Root.Settings.CMS',
            array(
                HeaderField::create('', 'CMS Menu'),
                CheckboxField::create('ShowAssetAdmin'),
                CheckboxField::create('ShowSecurityAdmin'),
                CheckboxField::create('ShowReportAdmin'),
                CheckboxField::create('ShowHelpLink')
            )
        );

    }

}