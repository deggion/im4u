// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
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

})
