$(document).on('ready', function() {
	'use strict';
	var layout = new Layout();
	layout.cargar();
	new WOW().init();
	
	// TODO: Separar en modulo Home
	$("#owl-example").owlCarousel({
      autoPlay: 3000,
      items : 4
	});
	
	$("#owl-testimonial").owlCarousel({
	navigation : true,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
	navigation: false
	});	

	$('#video').YTPlayer({
	    fitToBackground: true,
	    videoId: 'YJg02ivYzSs',
		playerVars: {
			modestbranding: 0,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			branding: 0,
			rel: 0,
			autohide: 0,
			start: 59
		}	    
	});
});
