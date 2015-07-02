<?php

/**
 * Class CMSBrandingLeftAndMainExtension
 */
class CMSBrandingLeftAndMainExtension extends LeftAndMainExtension {

    private static $cms_menu_background = '#1b354c';

    public function init(){
        /** =========================================
         * @var SiteConfig $config
        ===========================================*/

        $config = SiteConfig::current_site_config();

        /**
         * Remove the Reports menu item in the CMS
         */
        if(!$config->ShowAssetAdmin) {
            CMSMenu::remove_menu_item('AssetAdmin');
        }
        /**
         * Remove the Blog menu item in the CMS
         */
        if(!$config->ShowBlogAdmin) {
            CMSMenu::remove_menu_item('BlogPageModelAdmin');
        }
        /**
         * Remove the Help Link in the CMS
         */
        if(!$config->ShowHelpLink) {
            CMSMenu::remove_menu_item('Help');
        }
        /**
         * Remove the Messages menu item in the CMS
         */
        if(!$config->ShowMessagesAdmin) {
            CMSMenu::remove_menu_item('ContactMessageModelAdmin');
        }
        /**
         * Remove the Portfolio menu item in the CMS
         */
        if(!$config->ShowPortfolioAdmin) {
            CMSMenu::remove_menu_item('PortfolioPageModelAdmin');
        }
        /**
         * Remove the Reports menu item in the CMS
         */
        if(!$config->ShowReportAdmin) {
            CMSMenu::remove_menu_item('ReportAdmin');
        }
        /**
         * Remove the Security menu item in the CMS
         */
        if(!$config->ShowSecurityAdmin) {
            CMSMenu::remove_menu_item('SecurityAdmin');
        }

        /** Set the background colour of the cms sidebar menu. */
        Requirements::customCSS(
            '.cms-menu {background: '.$this->owner->stat('cms_menu_background').';}'
        );
    }

}