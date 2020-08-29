$( document ).ready(function() {
    // buttons of filter staying active upon click
    // http://stackoverflow.com/questions/3778647/how-to-change-classes-on-click
    $(".brand-filter-small ul li").click(function() {
      var $this = $(this);
      if(!$this.hasClass('active'))
        $('.active').toggleClass("active").toggleClass("inactive");
      $this.toggleClass("active").toggleClass("inactive");
      });



    // quick search regex
    var qsRegex;
    
    // init Isotope
    var $container = $('.brands-grid-small').isotope({
      itemSelector: '.brand_box_small',
      layoutMode: 'fitRows',
      filter: function() {
        return qsRegex ? $(this).text().match( qsRegex ) : true;
      }
    });
  
    // use value of search field to filter
    var $quicksearch = $('#quicksearchSmall').keyup( debounce( function() {
      qsRegex = new RegExp( $quicksearch.val(), 'gi' );
      $container.isotope();
    }) );

    $('#filters-small').on( 'click', 'ul li', function() {
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

