
$(function() {
    'use strict';
    var winH = $(window).height(),
        heading__part = $(".heading__part").innerHeight();
   $('.carousel__part, .carousel-item, .overlay').height(winH - heading__part);
    $(".featured-work__part .featured__list li").on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
            $('.featured-work_images .col-md-4').css('opacity', 1);
            } else {
                    $('.featured-work_images .col-md-4').css('opacity', '.00');
    $($(this).data('class')).parent().css('opacity', 1);
    }
    });
});
//$(window).load(function()
//{
//  $(".loading_page").fadeOut(3000)  
//});
