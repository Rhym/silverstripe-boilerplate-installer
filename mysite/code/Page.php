<?php

/**
 * Class Page
 */
class Page extends SiteTree
{

    /**
     * @var array
     */
    private static $db = array();

    /**
     * @var array
     */
    private static $has_one = array();

    /**
     * @return FieldList
     */
    public function getCMSFields()
    {
        /** =========================================
         * @var FieldList $fields
        ===========================================*/

        $fields = parent::getCMSFields();
        return $fields;
    }

    /**
     * @return FieldList
     */
    public function getSettingsFields()
    {
        /** =========================================
         * @var FieldList $fields
        ===========================================*/

        $fields = parent::getSettingsFields();
        $fields->removeByName('ShowInSearch');
        return $fields;
    }

}

/**
 * Class Page_Controller
 */
class Page_Controller extends ContentController
{

    private static $allowed_actions = array();

    public function init()
    {
        parent::init();
    }

}
