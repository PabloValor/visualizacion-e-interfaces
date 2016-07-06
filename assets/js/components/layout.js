var Layout = function() {
	'use strict';
	this.cargar = function() {
		var $header 		= $('header'),
			$window 		= $(window),
			$nav 			= $('nav'),
			CounterFlag		= true;

		cargarSettings($window, $header);
		cargarEventos($window, $header, $nav, CounterFlag);
	};

	function cargarSettings($window, $header) {
		var $buttonCollapse = $('.button-collapse');

		// header
		$header.height($window.height());

		// particlesground
		var particlesOptions = {
			dotColor: 'ghostwhite',
			lineColor: isPage('widget') ? 'white': 'gray',
			directionX: 'center',
			directionY: 'center',
			density: 10000,
			particleRadius: 4,
			lineWidth: .5
		}
		$header.particleground(particlesOptions);

		// menu mobile
		$buttonCollapse.sideNav();

	}
	function cargarEventos($window, $header, $nav, CounterFlag) {
		if(isPage('contacto')) {
			bgColorNav($nav, true);
		}
    	// scroll nav color
    	$window.scroll(function() {
    		changeNavColor($window, $header, $nav);

    		// TODO: Refactor
			var scrollPosition = scrollY || pageYOffset;
			if (scrollPosition > $("#counter").position().top - $window.height() && CounterFlag) {
				CounterFlag = false;
				$('.timer').countTo();
			}
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

	function isPage(name) {
		return window.location.pathname.includes(name);
	}

};
