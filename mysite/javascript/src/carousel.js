;(function($) {
    $(document).ready(function(){

        $('.carousel').owlCarousel({
            items: 1,
            dots: false,
            mouseDrag: false
        });

        /** -----------------------------------------
         * Gallery Carousel
         -------------------------------------------*/

        $('.gallery-carousel').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
            mouseDrag: false
        });

    });
})(jQuery);