<?php

/**
 * Class SiteConfigExtension
 *
 * @property boolean ShowAssetAdmin
 * @property boolean ShowBlogAdmin
 * @property boolean ShowHelpLink
 * @property boolean ShowMessagesAdmin
 * @property boolean ShowPortfolioAdmin
 * @property boolean ShowReportAdmin
 * @property boolean ShowSecurityAdmin
 */
class SiteConfigExtension extends DataExtension {

    private static $db = array(
        'ShowAssetAdmin'        => 'Boolean',
        'ShowBlogAdmin'         => 'Boolean',
        'ShowHelpLink'          => 'Boolean',
        'ShowMessagesAdmin'     => 'Boolean',
        'ShowPortfolioAdmin'    => 'Boolean',
        'ShowReportAdmin'       => 'Boolean',
        'ShowSecurityAdmin'     => 'Boolean'
    );

    private static $defaults = array(
        'ShowAssetAdmin'        => true,
        'ShowBlogAdmin'         => true,
        'ShowHelpLink'          => false,
        'ShowMessagesAdmin'     => true,
        'ShowPortfolioAdmin'    => true,
        'ShowReportAdmin'       => false,
        'ShowSecurityAdmin'     => true
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
                CheckboxField::create('ShowBlogAdmin'),
                CheckboxField::create('ShowHelpLink'),
                CheckboxField::create('ShowMessagesAdmin'),
                CheckboxField::create('ShowPortfolioAdmin'),
                CheckboxField::create('ShowReportAdmin'),
                CheckboxField::create('ShowSecurityAdmin')
            )
        );

    }

}