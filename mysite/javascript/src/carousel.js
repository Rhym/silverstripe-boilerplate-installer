;(function($) {
    /** =========================================
     * Carousel
     ==========================================*/

    var $carousel = $('.carousel');
    if ($carousel.length) {
        $carousel.owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
            mouseDrag: false,
            navContainerClass: 'carousel__navigation',
            navClass: [ 'carousel__navigation__item carousel__navigation__item--prev', 'carousel__navigation__item carousel__navigation__item--next' ]
        });
    }
})(jQuery);