;(function($) {
    $(document).ready(function(){

        /*---------------------------------------------*\
         * Carousel
        \*---------------------------------------------*/

        $('.owl-carousel').owlCarousel({
            items: 1,
            dots: false
        });

    });
})(jQuery);
//;(function($) {
//    $(document).ready(function(){
//
//        /*---------------------------------------------*\
//         * Animation - https://github.com/imakewebthings/waypoints
//        \*---------------------------------------------*/
//
//        $('.animated').waypoint(function(){
//            var animation = $(this).data('animation');
//            $(this).addClass(animation);
//        },{
//            context: '.content-wrap',
//            offset:'75%'
//        });
//
//    });
//})(jQuery);