;
(function ($) {
  /** =========================================
   * Contact
   ==========================================*/

  /** Polyfill for browsers that don't support flexbox */
  var $map = $('.contact__details__item__map'),
    $content = $('.contact__details__item--content');
  if ($map.length && $content.length) {
    /** If the browser doesn't support flexbox, and is not a mobile device. */
    if (!Modernizr.flexbox && Modernizr.mq('(min-width: 768px)')) {
      $map.css({'height': $content.outerHeight()});
    }
  }
})(jQuery);