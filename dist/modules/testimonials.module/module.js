jQuery(document).ready(function ($) {
    var slideCount,
        slideWidth,
        slideHeight,
        sliderUlWidth,
        slideTime;

    function updateVariables(id) {
        slideCount = $(id + ' .testimonial-module ul li').length;
        slideWidth = $(id + ' .testimonial-module ul li').width();
        var heights = [];
        $.each($(id + ' .testimonial-module ul li'), function() {
          heights.push($(this).height())
        })
        slideHeight = Math.max.apply(null, heights);
        sliderUlWidth = slideCount * slideWidth;
      	slideTime = $(id + ' .testimonial-module').data('slide-time') + '000';
        $(id + ' .testimonial-module').css({ width: slideWidth, height: slideHeight });
        $(id + ' .testimonial-module ul').css({ width: sliderUlWidth, marginLeft: slideCount == 1 ? 0 : (- slideWidth) });
    }

    function moveLeft(id) {
        $(id + ' .testimonial-module ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $(id + ' .testimonial-module ul li:last-child').prependTo(id + ' .testimonial-module ul');
            $(id + ' .testimonial-module ul').css('left', '');
        });
    };
  
    function moveRight(id) {
        $(id + ' .testimonial-module ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $(id + ' .testimonial-module ul li:first-child').appendTo(id + ' .testimonial-module ul');
            $(id + ' .testimonial-module ul').css('left', '');
        });
    };

    $.each($('.testimonial-module').parent('div'), function() {
        var uniqueId = '#' + $(this).attr('id');
      
        updateVariables(uniqueId);

        if (slideCount == 2) {
            var slide1 = $(uniqueId + ' .testimonial-module ul li')[0];
            var slide2 = $(uniqueId + ' .testimonial-module ul li')[1];
            $(slide1).clone().appendTo(uniqueId + ' .testimonial-module ul');
            $(slide2).clone().appendTo(uniqueId + ' .testimonial-module ul');
            updateVariables(uniqueId)
        }
        
        $(window).resize(function() {
            updateVariables(uniqueId);
        });
      
        $(uniqueId + ' a.control_prev').click(function (e) {
            moveLeft(uniqueId);
            e.preventDefault();
        });
      
        $(uniqueId + ' a.control_next').click(function (e) {
            moveRight(uniqueId);
            e.preventDefault();
        });

        $(uniqueId + ' .testimonial-module ul li:last-child').prependTo(uniqueId + ' .testimonial-module ul');
      
        if ($(uniqueId + ' .testimonial-module').hasClass('auto-loop') === true) {
          setInterval(function () {
            moveRight(uniqueId);
          }, slideTime);
        }
    })
});