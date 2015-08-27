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
        /** @var FieldList $fields */
        $fields = parent::getCMSFields();

        return $fields;
    }

    /**
     * @return FieldList
     */
    public function getSettingsFields()
    {
        /** @var FieldList $fields */
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
    /**
     * @var array
     */
    private static $allowed_actions = array();

    public function init()
    {
        $baseHref = Director::BaseURL();

        /** -----------------------------------------
         * Javascript
         * ----------------------------------------*/

        Requirements::insertHeadTags('<script type="text/javascript" src="' . $baseHref . project() . '/javascript/lib/modernizr.min.js"></script>',
            'Modernizr');

        /**
         * Set All JS to be right before the closing </body> tag.
         */
        Requirements::set_force_js_to_bottom(true);
        if (Director::isDev()) {
            Requirements::javascript(project() . '/javascript/main.js');
        } else {
            Requirements::javascript(project() . '/javascript/main.min.js');
        }

        /** -----------------------------------------
         * CSS
         * ----------------------------------------*/

        Requirements::css(project() . '/css/main.css', 'all');

        parent::init();
    }

}
