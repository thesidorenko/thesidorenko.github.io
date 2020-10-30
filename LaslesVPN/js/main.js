$('.reviews-slider .reviews-slides').slick({
	dots: true,
	appendDots: $('.reviews-slider .slider-nav'),
	infinite: true, // цикличная карусель
	slidesToScroll: 1,
	// arrows: false, // скрыть кнопки переключения (вообще)
	nextArrow: $('.button-next'),
	prevArrow: $('.button-prev'),
	variableWidth: true,
});