/** =========================================
 * Init
 ===========================================*/

/** -----------------------------------------
 * Bower Components
 *
 * Module names are set in the
 * package.json
 -------------------------------------------*/

var $ = require('jquery');
global.jQuery = require('jquery');
require('owlcarousel');
require('bootstrap-modal');
require('bootstrap-collapse');
require('parsley');

/** -----------------------------------------
 * Project Scripts
 -------------------------------------------*/

require('./ajax-content.js');
require('./popout-menu.js');
require('./carousel.js');
require('./waypoints.js');