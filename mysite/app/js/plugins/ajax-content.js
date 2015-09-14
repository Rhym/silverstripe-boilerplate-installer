//;
//(function ($) {
//  /**
//   * If .ajax-control exists on the page
//   */
//  if ($('.ajax-control').length) {
//    var $content = $('.ajax-content'),
//      $loadingClass = 'js-is-loading',
//      $window = $('.content-wrap'),
//      replaceContent = function (url) {
//        var param = '&ajax=1',
//          ajaxUrl = (url.indexOf(param) === -1) ? url + param : url,
//          cleanUrl = url.replace(new RegExp(param + '$'), '');
//        $.ajax({
//          url: ajaxUrl,
//          beforeSend: function (xhr) {
//            $content.addClass($loadingClass);
//          }
//        })
//          .done(function (response) {
//            $content.removeClass($loadingClass).html(response);
//            /**
//             * Animate a scroll to the top of the page.
//             */
//            $window.animate({scrollTop: 0}, 'fast');
//            window.history.pushState(
//              {url: cleanUrl},
//              document.title,
//              cleanUrl
//            );
//          })
//          .fail(function (xhr) {
//            console.log('Error: ' + xhr.responseText);
//          });
//      };
//    /**
//     * On ajax control click
//     */
//    $content.on('click', '.ajax-control a', function (e) {
//      e.preventDefault();
//      var url = $(this).attr('href');
//      replaceContent(url);
//    });
//
//    /**
//     * Hook into the users history changes
//     * if there is a saved history state
//     * run the replaceContent() function.
//     *
//     * @param e
//     */
//    window.onpopstate = function (e) {
//      if (e.state.url) {
//        replaceContent(e.state.url);
//      }
//      else {
//        e.preventDefault();
//      }
//    }
//  }
//})(jQuery);
