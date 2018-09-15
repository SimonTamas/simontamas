jQuery(function($) {
	$(document).ready( function() {

		//Preloader
		$('#status').delay(300).fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
		$('body').delay(550).css({'overflow': 'visible'});

		// Animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated pulse");
		});

		// Animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});

		// Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW({
			mobile: false
		});
		wow.init();

		//MagnificPopup
		$('.image-link').magnificPopup({type: 'image'});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items: 3,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3]
		});

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
			navigation: false, // Show next and prev buttons
			slideSpeed: 300,
			paginationSpeed: 400,
			singleItem: true
		});

		//SmothScroll
		function filterPath(string) {
			return string
				.replace(/^\//, '')
				.replace(/(index|default).[a-zA-Z]{3,4}$/, '')
				.replace(/\/$/, '');
		}

		var locationPath = filterPath(location.pathname);
		var scrollElem = scrollableElement('html', 'body');


		// use the first element that is "scrollable"
		function scrollableElement(els) {
			for (var i = 0, argLength = arguments.length; i < argLength; i++) {
				var el = arguments[i],
					$scrollElement = $(el);
				if ($scrollElement.scrollTop() > 0) {
					return el;
				} else {
					$scrollElement.scrollTop(1);
					var isScrollable = $scrollElement.scrollTop() > 0;
					$scrollElement.scrollTop(0);
					if (isScrollable) {
						return el;
					}
				}
			}
			return [];
		}

		$(".dropdown-menu a").click(function () {
			$(this).closest(".dropdown-menu").prev().dropdown("toggle");
		});


		$('.fancybox').fancybox({
			padding: 10,
			helpers: {
				overlay: {
					locked: false
				}
			},
			arrows: false,
			beforeShow: function () {
				$(".skill-60").css("width", "0%").animate({width: "60%"}, 2000);
				$(".skill-70").css("width", "0%").animate({width: "70%"}, 2000);
				$(".skill-80").css("width", "0%").animate({width: "80%"}, 2000);
				$(".skill-90").css("width", "0%").animate({width: "90%"}, 2000);
			}
		});

		if ($('.navbar-default').length) {
			$('.navbar-default').stickUp();
		}
	});
});