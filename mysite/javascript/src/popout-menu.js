;
(function ($) {
  /** =========================================
   * Popout Menu
   ==========================================*/

  var body = $('body');
  $('.open-children').on('click', function (e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(target).toggleClass('js-is-active');
    $(this).toggleClass('js-is-active');
    return false;
  });
})(jQuery);
