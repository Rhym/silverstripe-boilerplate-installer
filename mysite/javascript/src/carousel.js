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
        var owl = $carousel.data('owlCarousel');
        $('.carousel-navigation__item--next').on('click', function(e){
            e.preventDefault();
            owl.next();
        });
        $('.carousel-navigation__item--prev').on('click', function(e){
            e.preventDefault();
            owl.prev();
        });
    }
})(jQuery);