$('.reviews_slider .reviews_slides').slick({
	infinite: true, 
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	appendDots: $('.reviews_slider .slider-nav'),
	prevArrow: $('.button_prev'),
	nextArrow: $('.button_next'),
});