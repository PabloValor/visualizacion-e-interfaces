$(document).on('ready', function() {
	'use strict';
	var layout = new Layout();
	layout.cargar();
	new WOW().init();
	
	// TODO: Separar en modulo Home
	$('.timer').countTo();
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
