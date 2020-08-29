(function($) {

	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/


	
	
	//run
	$(function () {
		$('#fixed').stickyPanel();
	});
	/*----------------------------------------------------*/
	/*  MailChimp Slider
    /*----------------------------------------------------*/
	
	/* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
	$(window).on('load', function() {
		$('.brand-filter ul li').on('click', function() {
			$('.brand-filter ul li').removeClass('active');
			$(this).addClass('active');

			var data = $(this).attr('data-filter');
			$workGrid.isotope({
				filter: data
			});
		});

		if (document.getElementById('brands')) {
			var $workGrid = $('.brands-grid').isotope({
				itemSelector: '.all',
				percentPosition: true,
				layoutMode: 'cellsByColumn',
				cellsByColumn: {
					columnWidth: 500,
					rowHeight: 500
				}
			});
		}
	});


	
})(jQuery);
