jQuery(function($) {

})

function func() {
	////////////Работа с атрибутами///////////////

	let img = $('.img_container > img');

	// if(img.attr('src') == 'images/index-1_img-1.jpg'){
	// 	//img.attr('src','images/car.jpg');
	// 	img.attr('src', function(index, v) {
	// 		return 'images/car.jpg';
	// 	})
	// } else {
	// 	img.attr('src','images/index-1_img-1.jpg');
	// }

	//img.removeAttr('src');

	// if(img.hasClass('redClass')) {
	// 	img.removeClass('redClass');
	// 	img.addClass('greenClass');
	// } else {
	// 	img.removeClass('greenClass');
	// 	img.addClass('redClass');
	// }

	// img.toggleClass(function (index, cl) {
	// 	if(cl == 'redClass') {
	// 		return 'greenClass';
	// 	} else if (cl == 'redClass greenClass') {
	// 		return 'redClass greenClass';
	// 	}
	// 	return 'redClass';
	// });

	// $('input').val(function(ind, value) {
	// 	return ind;
	// });


	//////////Работа c параметрами и стилями/////////////
	//img.css('width', 100);

	// img.css({
	// 			'width':100,
	// 			'height': 400,
	// 			'marginBottom': 50
	// 		});

	// $('input').css({'borderStyle': 'solid', 'borderColor':'red'});
	// $('input').css('borderWidth', function (index, value) {
	// 	return index*2;

	// });

	// console.log(img.height())

	// console.log(img.innerHeight())

	// console.log(img.outerHeight(true))

	// console.log(img.width())

	// console.log(img.innerWidth())

	// console.log(img.outerWidth(true))

	// img.height(320)
	// img.width(240)
	// img.css('position','absolute');

	// console.log(img.offset().left + '|' + img.offset().top);

	// //img.offset({left: 200 ,top: 400})

	// //imp.position({left: 200 ,top: 400});

	// $(document).scrollTop(0);


}
