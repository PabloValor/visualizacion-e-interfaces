var Layout = function() {
	'use strict';
	this.cargar = function() {
		cargarEventos();
	};

	function cargarEventos() {
		// particlesground
		$('header').particleground({
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