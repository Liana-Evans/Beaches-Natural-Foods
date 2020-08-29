$(document).ready(function() {

    var sync1 = $("#sync1");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;
  
    sync1.owlCarousel({
      items : 3,
      slideSpeed : 2500,
      pullDrag: true,
      nav: true,
      autoplay: false,
      autoWidth: false,
      stagePadding: 30,
      dots: false,
      loop: true,
      transitionStyle: "fade",
      responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
      },
      responsiveRefreshRate : 300,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2.5px;stroke: #f4ba19;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2.5px;stroke: #f4ba19;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);
  
    
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
    }
    
  });