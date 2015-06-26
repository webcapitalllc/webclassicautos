// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  var $featureSliderNav  = $('.feature-slider-nav li'),
      $featureSliderInfo = $('.feature-slider-info');

  var $featureSlider = $('.feature-slider-slides')
      .on('init', onInit)
      .on('beforeChange', sliderWillChange)
      .slick({
        autoplay: true,
        arrows: false
      });

  function onInit(event, slick){
    sliderWillChange(event, slick, slick.currentSlide, slick.currentSlide);
  }

  function sliderWillChange(event, slick, currentSlide, nextSlide){
    var data = $(slick.$slides[nextSlide]).data();

    $featureSliderNav.eq(currentSlide).find('button').removeClass('is-active');
    $featureSliderNav.eq(nextSlide).find('button').addClass('is-active');

    $featureSliderInfo.html('<a href="'+ data.productLink +'">' + data.productHilite + ' ' + data.productName + ' <small>'+data.productPrice+'</small></a>');
  };

  $featureSliderNav.on('click', 'button', function(){
    $featureSlider.slick('slickGoTo',$(this).parent().index());
  });

});
