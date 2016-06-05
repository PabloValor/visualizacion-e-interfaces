var Layout = function() {
	'use strict';
	this.cargar = function() {
		cargarEventos();
	};

	function cargarEventos() {
		// particlesground
		$('header').particleground({
			dotColor: '#ff0000',
			lineColor: '#ff0000',
			directionX: 'up',
			directionY: 'up',
			density: 10000
		});
	}
};