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

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 900) {
	// 		$('.header').addClass('top')
	// 	} else {
	// 		$('.header').removeClass('top')
	// 	}
	// })
	
	headerBurger.on('click', function () {
		$(this).toggleClass('cross')
		headerNav.toggleClass('active')
		overlay.toggleClass('active')
		$('.socials').toggleClass('active')
		if (headerNav.hasClass('active')) {
			html.addClass('_over-hidden')
			body.addClass('_over-hidden')
		} else {
			html.removeClass('_over-hidden')
			body.removeClass('_over-hidden')
		}
		
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
	
	$('#dropdownNav').on('click', function () {
		$('.main-nav').addClass('active')
		$('html, body').addClass('_over-hidden')
	})
	
	$('.main-nav__close').on('click', function () {
		$('.main-nav').removeClass('active')
		$('html, body').removeClass('_over-hidden')
	})

})


