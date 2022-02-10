// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import 'slick-carousel'

document.addEventListener('DOMContentLoaded', () => {

	const headerNav = $('.header__nav')
	const headerBurger = $('.header__burger')
	const overlay = $('.overlay')
	const html = $('html')
	const body = $('body')
	
	$('.scroll-top').click(() => {
		window.scrollTo(pageYOffset, 0)
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 900) {
			$('.header').addClass('top')
		} else {
			$('.header').removeClass('top')
		}
	})
	
	headerBurger.on('click', function () {
		$(this).toggleClass('cross')
		headerNav.toggleClass('active')
		overlay.toggleClass('active')
		html.toggleClass('_over-hidden')
		body.toggleClass('_over-hidden')
		$('.socials').toggleClass('active')
	})

	function checkWidth() {
		let windowWidth = $('body').innerWidth()
		if(windowWidth <= 991) {
			
			$('#slickCasesMob').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000
			})
			
			$('#slickBlog').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 4000
			})
			
		}
	}

	checkWidth();

	// $(window).resize(function(){
	// 	checkWidth();
	// });
	
	$('.footer-nav b').on('click', function () {
		$(this).parent('.footer-nav').toggleClass('active')
	})

})


