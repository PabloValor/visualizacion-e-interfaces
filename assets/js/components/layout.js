var Layout = function() {
	'use strict';
	this.cargar = function() {
		var $header 		= $('header'),
			$window 		= $(window),
			$nav 			= $('nav');

		cargarSettings($window, $header);
		cargarEventos($window, $header, $nav);
	};

	function cargarSettings($window, $header) {
		var $buttonCollapse = $('.button-collapse');
		
		// header
		$header.height($window.height());

		// particlesground
		/*$header.particleground({
			dotColor: 'white',
			lineColor: '#F1F1F1',
			directionX: 'up',
			directionY: 'up',
			density: 10000,
			particleRadius: 5
		});*/

		// menu mobile
		$buttonCollapse.sideNav();

	}
	function cargarEventos($window, $header, $nav) {
    	// scroll nav color
    	$window.scroll(function() {
    		changeNavColor($window, $header, $nav);
    	});
	}

	function changeNavColor($window, $header, $nav) {
		if($window.scrollTop() > $header.height() - 64) {
			bgColorNav($nav, true);
			} else {
			bgColorNav($nav, false);
		}		
	}

	function bgColorNav($nav, show) {
		$nav.css({ 
			background: show ? '#2B373A' : 'transparent'
		});
	}
};
