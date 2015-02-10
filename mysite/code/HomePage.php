<?php

/**
 * Class HomePage
 */
class HomePage extends Page {

    //private static $icon = '';

    private static $db = array();

    /**
     * @return FieldList
     */
    public function getCMSFields() {
        $fields = parent::getCMSFields();
        return $fields;
    }

}

/**
 * Class HomePage_Controller
 */
class HomePage_Controller extends Page_Controller {}