$(document).ready(function() {
    $('.logo-carousel').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1100,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  });