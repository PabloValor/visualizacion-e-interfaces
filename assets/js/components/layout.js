var Layout = function() {
	'use strict';
	this.cargar = function() {
		cargarEventos();
	};

	function cargarEventos() {
		var $header = $('header');
		var $window = $(window);
		// header
		$header.height($window.height()- 64);

		// particlesground
		$header.particleground({
			dotColor: 'white',
			lineColor: '#F1F1F1',
			directionX: 'up',
			directionY: 'up',
			density: 10000,
			particleRadius: 5
		});

		// menu mobile
    	$(".button-collapse").sideNav();
	}
};