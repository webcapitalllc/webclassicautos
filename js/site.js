// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  var $featureSliderNav = $('.feature-slider-nav li');

  var $featureSlider = $('.feature-slider-slides').slick({
    autoplay: true,
    arrows: false
  });

  $featureSliderNav.on('click', 'button', function(){
    $featureSlider.slick('slickGoTo',$(this).parent().index());
  });

  $featureSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $featureSliderNav.eq(currentSlide).find('button').removeClass('is-active');
    $featureSliderNav.eq(nextSlide).find('button').addClass('is-active');
  });

});
