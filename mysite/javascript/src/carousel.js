;(function($) {
    /** =========================================
     * Carousel
     ==========================================*/

    var $carousel = $('.carousel--multiple');
    if ($carousel.length) {
        $carousel.owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            mouseDrag: false
        });
        /** Custom navigation */
        $('.carousel-navigation__item--next').on('click', function(e){
            e.preventDefault();
            $carousel.trigger('next.owl.carousel');
        });
        $('.carousel-navigation__item--prev').on('click', function(e){
            e.preventDefault();
            $carousel.trigger('prev.owl.carousel');
        });
    }
})(jQuery);