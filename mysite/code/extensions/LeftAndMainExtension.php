<?php

/**
 * Class CMSBrandingLeftAndMainExtension
 */
class CMSBrandingLeftAndMainExtension extends LeftAndMainExtension {

    public function init(){
        $config = SiteConfig::current_site_config();

        /**
         * Remove the Reports menu item in the CMS
         */
        if(!$config->ShowAssetAdmin) {
            CMSMenu::remove_menu_item('AssetAdmin');
        }
        /**
         * Remove the Security menu item in the CMS
         */
        if(!$config->ShowSecurityAdmin) {
            CMSMenu::remove_menu_item('SecurityAdmin');
        }
        /**
         * Remove the Reports menu item in the CMS
         */
        if(!$config->ShowReportAdmin) {
            CMSMenu::remove_menu_item('ReportAdmin');
        }
        /**
         * Remove the Help Link in the CMS
         */
        if(!$config->ShowHelpLink) {
            CMSMenu::remove_menu_item('Help');
        }
    }

}