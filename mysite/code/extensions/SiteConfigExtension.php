<?php

/**
 * Class SiteConfigExtension
 */
class SiteConfigExtension extends DataExtension {

    private static $db = array();

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

    }

}