

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$('.reviews_slider .reviews_slides').slick({
	infinite: true, 
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	appendDots: $('.reviews_slider .slider-nav'),
	prevArrow: $('.button_prev'),
	nextArrow: $('.button_next'),
});

$.ajax({
	url: 'http://api.weatherapi.com/v1/current.json',         /* Куда пойдет запрос */
	method: 'get',             /* Метод передачи (post или get) */
	dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
	data: {key: '446b705bade64582ad4123545211108',
			q: 'Kiev',
			aqi: 'no',
			},     /* Параметры передаваемые в запросе. */
	success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
	$(".temp span").text(data.current.temp_c);
	}
});
