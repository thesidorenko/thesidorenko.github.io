(function($) {
	$(function() {

		$('ul.tabs_caption').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
		});

	});
})(jQuery);

$('.single-item').slick({
	infinite: true, // цикличная карусель
	slidesToShow: 2,
	slidesToScroll: 2,
	// arrows: false, // скрыть кнопки переключения (вообще)
	nextArrow: $('.next-project'),
	prevArrow: $('.prev-project'),
});

$('.type-equipment').slick({
	infinite: true, 
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: $('.button-forward'),
	prevArrow: $('.button-back'),
});
