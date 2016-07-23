$(window).load(function() {
	//Preloader
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
})

$(function(){

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
	$('.image-link').magnificPopup({type:'image'});


	// OwlCarousel N1
	$("#owl-demo").owlCarousel({
		autoPlay: 3000,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});

	// OwlCarousel N2
	$("#owl-demo-1").owlCarousel({
		  navigation : false, // Show next and prev buttons
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true
	});

	//SmothScroll
	function filterPath(string) {
		return string
			.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
	}
	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');

	/*
	$('a[href*=\\#]').each(function () {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
			var $target = $(this.hash), target = this.hash;
			if (target && $target.offset()) {
				var targetOffset = $target.offset().top + $(target).scrollTop();
				console.log(targetOffset);
				$(this).click(function (event) {
					event.preventDefault();
					$(scrollElem).animate({scrollTop: targetOffset}, 400, function () {
						location.hash = target;
					});
				});
			}
		}
	});
	*/

	// use the first element that is "scrollable"
	function scrollableElement(els) {
		for (var i = 0, argLength = arguments.length; i <argLength; i++) {
			var el = arguments[i],
				$scrollElement = $(el);
			if ($scrollElement.scrollTop()> 0) {
				return el;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop()> 0;
				$scrollElement.scrollTop(0);
				if (isScrollable) {
					return el;
				}
			}
		}
		return [];
	}

	$(".dropdown-menu a").click(function() {
		$(this).closest(".dropdown-menu").prev().dropdown("toggle");
	});


	$('.fancybox').fancybox({
		padding: 10,
		helpers: {
			overlay: {
				locked: false
			}
		},
		arrows : false,
		beforeShow:function() {
			$(".skill-70").css("width","0%").animate({width: "70%"}, 2000);
			$(".skill-80").css("width","0%").animate({width: "80%"}, 2000);
			$(".skill-90").css("width","0%").animate({width: "90%"}, 2000);
		}
	});



});

jQuery(function($) {
	$(document).ready( function() {
		$('.navbar-default').stickUp();
	});
});