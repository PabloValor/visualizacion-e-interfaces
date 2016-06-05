var Layout = function() {
	'use strict';
	this.cargar = function() {
		cargarEventos();
	};

	function cargarEventos() {
		// particlesground
		$('header').particleground({
			dotColor: '#CCC',
			lineColor: '#CCC',
			directionX: 'up',
			directionY: 'up',
			density: 10000
		});
	}
};