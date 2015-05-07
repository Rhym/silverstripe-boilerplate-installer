;(function($) {
    $(document).ready(function(){

        $('.carousel').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
            mouseDrag: false
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