// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  var $featureSliderNav  = $('.feature-slider-nav li'),
      $featureSliderInfo = $('.feature-slider-info');

  var $featureSlider = $('.feature-slider-slides')
      .on('init', onFeatureSliderInit)
      .on('beforeChange', featureSliderWillChange)
      .slick({
        autoplay: true,
        arrows: false
      });

  function onFeatureSliderInit(event, slick){
    featureSliderWillChange(event, slick, slick.currentSlide, slick.currentSlide);
  }

  function featureSliderWillChange(event, slick, currentSlide, nextSlide){
    var data = $(slick.$slides[nextSlide]).data();

    $featureSliderNav.eq(currentSlide).find('button').removeClass('is-active');
    $featureSliderNav.eq(nextSlide).find('button').addClass('is-active');

    $featureSliderInfo.html('<a href="'+ data.productLink +'">' + data.productHilite + ' ' + data.productName + ' <small>'+data.productPrice+'</small></a>');
  };

  $featureSliderNav.on('click', 'button', function(){
    $featureSlider.slick('slickGoTo',$(this).parent().index());
  });



  // Product Gallery
  $('.product-gallery-heros').slick({
    asNavFor: '.product-gallery-thumbs',
    nextArrow: $('.product-gallery .next-arrow'),
    prevArrow: $('.product-gallery .prev-arrow')
  });

  var $productGalleryThumbs = $('.product-gallery-thumbs')
    .slick({
      slidesToShow: $('.product-gallery-thumbs li').length,
      asNavFor: '.product-gallery-heros',
      focusOnSelect: true,
      arrows: false
    });

  $productGalleryThumbs.find('li a').on('click', function(e){
    e.preventDefault();
  });

});
