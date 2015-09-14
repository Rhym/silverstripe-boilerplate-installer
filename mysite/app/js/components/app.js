const $ = require('jquery');

global.jQuery = require('jquery');

require('owlcarousel');
require('bootstrap-modal');
require('bootstrap-modal');
require('bootstrap-collapse');
require('bootstrap-transition');
require('parsley');
var attachFastClick = require('fast-click');
attachFastClick(document.body);

/** -----------------------------------------
 * Project Scripts
 * ----------------------------------------*/

require('../plugins/ajax-content.js');
require('../plugins/carousel.js');
require('../plugins/contact.js');
require('../plugins/popout-menu.js');


console.log('Houston we have lift off')
