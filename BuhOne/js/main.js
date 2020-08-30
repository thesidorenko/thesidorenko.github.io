
$('.first-slider .slides').slick({
	dots: true,
	appendDots: $('.first-slider .slider-nav'),
	infinite: true, // цикличная карусель
	slidesToShow: 1,
	slidesToScroll: 1,
	// arrows: false, // скрыть кнопки переключения (вообще)
	nextArrow: $('.button-next'),
	prevArrow: $('.button-prev'),
});

$('.clients-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: $('.button-forward-clients'),
	prevArrow: $('.button-back-clients'),
});

$('.reviews-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: $('.button-next-reviews'),
	prevArrow: $('.button-prev-reviews'),
});
