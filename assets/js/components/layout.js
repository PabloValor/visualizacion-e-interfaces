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
			dotColor: '#747474',
			lineColor: '#515151',
			directionX: 'up',
			directionY: 'up',
			density: 10000
		});

		// menu mobile
    	$(".button-collapse").sideNav();
	}
};