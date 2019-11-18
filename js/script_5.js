//jQuery.noConflict();
jQuery(function($) {

	///////////Добавление содержимого///////////////

	// $('.preffix_1').html();

	//$('.preffix_1').html('<p>Some text</p>');

	// $('.sf-menu li').html(function (index, value) {
	// 	if(index%2 == 0) {
	// 		return value.toUpperCase();
	// 	}

	// });

	//$('.preffix_1').text();

	//$('.preffix_1').text('Some text');

	// $('.sf-menu li').text(function (index, value) {
	// 	if(index%2 == 0) {
	// 		return value.toUpperCase();
	// 	}

	// });

	// $('.sf-menu li').append(function(index, value) {
	// 	if(index%2 == 0) {
	// 		return value.toUpperCase();
	// 	}
	// })

	//$('.sf-menu li').wrap($('<div class="new"></div>'));

	// $('.sf-menu li').wrapAll($('<div class="new"></div>'));

	$('label.message').click(function() {

		alert('Hello');

	})
});

function func() {

	let form = $('#contact-form fieldset label:first-child').clone();

	let count = $('#contact-form fieldset label').length;
	console.log(count);

	form.find('span').text('Field - ' + (count + 1));
	form.find('input').attr('name' + 'feild' + (count + 1));

	//$('#contact-form fieldset').append(form);

	//form.appendTo($('#contact-form fieldset'));

	//$('#contact-form fieldset').prepend(form);

	//form.prependTo($('#contact-form fieldset'));

	//$('label.message').after(form);

	//form.insertAfter('label.message');

	//$('label.message').before(form);

	//form.insertBefore('label.message');

	///////////Удаление содержимого///////////////

	//$('.sf-menu li').remove('.current');

	// let p = $('label.message').detach();

	// $('#contact-form fieldset').append(p);

	//$('.sf-menu li').empty();

	//$('li').unwrap();






}
