/** =========================================
 * Init
 ===========================================*/

/** -----------------------------------------
 * Bower Components
 *
 * Module names are set in the
 * package.json
 * ----------------------------------------*/

var $ = require('jquery');
global.jQuery = require('jquery');
require('owlcarousel');
require('bootstrap-modal');
require('bootstrap-collapse');
require('bootstrap-transition');
require('parsley');
var attachFastClick = require('fast-click');
attachFastClick(document.body);

/** -----------------------------------------
 * Project Scripts
 * ----------------------------------------*/

require('./ajax-content.js');
require('./carousel.js');
require('./contact.js');
require('./popout-menu.js');
