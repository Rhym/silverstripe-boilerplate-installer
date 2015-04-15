;(function($) {
    $(document).ready(function(){

        $('.carousel').owlCarousel({
            items: 1,
            dots: false
        });

        /*---------------------------------------------*\
         * Gallery Carousel
         \*---------------------------------------------*/

        $('.gallery-carousel').owlCarousel({
            items: 1,
            dots: false,
            //stagePadding: 200,
            nav: true,
            navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
        });

    });
})(jQuery);