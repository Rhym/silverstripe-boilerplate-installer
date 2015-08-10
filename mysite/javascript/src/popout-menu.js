;
(function ($) {
  /** =========================================
   * Popout Menu
   ==========================================*/

  var body = $('body');
  $('.open-children').on('click', function (e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(target).toggleClass('menu-wrap__menu__item__list--active');
    $(this).toggleClass('menu-wrap__menu__item__icon--active');
    return false;
  });
})(jQuery);
