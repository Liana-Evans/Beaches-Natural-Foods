

$( document ).ready(function() {
    // buttons of filter staying active upon click
    // http://stackoverflow.com/questions/3778647/how-to-change-classes-on-click
    $(".brand-filter ul li").click(function() {
      var $this = $(this);
      if(!$this.hasClass('active'))
        $('.active').toggleClass("active").toggleClass("inactive");
      $this.toggleClass("active").toggleClass("inactive");
      });



    // quick search regex
    var qsRegex;
    
    // init Isotope for different screen sizes
    if($(window).width()> 800){
      var $container = $('.brands-grid').isotope({
        itemSelector: '.brand_box',
        layoutMode: 'cellsByRow',

        cellsByRow: {
          columnWidth: 155,
          rowHeight: 30
        },
        filter: function() {
          return qsRegex ? $(this).text().match( qsRegex ) : true;
        }
      });
    } else if($(window).width() > 500 && $(window).width() < 800 ){
      var $container = $('.brands-grid').isotope({
        itemSelector: '.brand_box',
        layoutMode: 'cellsByRow',

        cellsByRow: {
          columnWidth: 120,
          rowHeight: 20
        },
        filter: function() {
          return qsRegex ? $(this).text().match( qsRegex ) : true;
        }
      });
    }else if($(window).width() < 414){
      var $container = $('.brands-grid').isotope({
        itemSelector: '.brand_box',
        layoutMode: 'cellsByRow',

        cellsByRow: {
          columnWidth: 100,
          rowHeight: 20
        },
        filter: function() {
          return qsRegex ? $(this).text().match( qsRegex ) : true;
        }
      });
    } else if($(window).width() < 500){
      var $container = $('.brands-grid').isotope({
        itemSelector: '.brand_box',
        layoutMode: 'cellsByRow',

        cellsByRow: {
          columnWidth: 100,
          rowHeight: 20
        },
        filter: function() {
          return qsRegex ? $(this).text().match( qsRegex ) : true;
        }
      });
    }
    // use value of search field to filter
    var $quicksearch = $('#quicksearch').keyup( debounce( function() {
      qsRegex = new RegExp( $quicksearch.val(), 'gi' );
      $container.isotope();
    }) );

    $('#filters').on( 'click', 'ul li', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

// search - debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout( delayed, threshold || 100 );
  }
  }

});

