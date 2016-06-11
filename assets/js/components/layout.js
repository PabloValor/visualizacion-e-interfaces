var Layout = function() {
	'use strict';
	this.cargar = function() {
		cargarEventos();
	};

	function cargarEventos() {
		var $header = $('header');
		var $window = $(window);
		var $nav = $('nav');
		// header
		$header.height($window.height());

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

    	// scroll nav color
    	$window.scroll(function() {
    		if($window.scrollTop() > $header.height()) {
    			bgColorNav($nav, true);
    		} else {
    			bgColorNav($nav, false);
    		}
    	});
	}

	function bgColorNav($nav, show) {
		$nav.css({ background: show ? 'black' : 'transparent' });
	}
};
