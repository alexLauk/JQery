jQuery(function($) {

///////////////Базовые Фильтры/////////////////////////

	// $('input[name=name]').focus();
	// $('input:focus').css({'border':'2px solid red'});
	// эл. который в фокусе

	//$('input:first').css({'border':'2px solid red'});
	//первый найденный эл.

	//$('input:last').css({'border':'2px solid red'});
	//последний найденный эл.

	//$('div:eq(1)').css({'border':'2px solid red'});
	//эл. под опеределенным номером

	//$('input:not(input:eq(2))').css({'border':'2px solid red'});
	//все эл. кроме указанного в параметре

	//$('input:even').css({'border':'2px solid red'});
	//все четные эл.

	//$('li:odd').css({'border':'2px solid red'});
	//все нечетные эл.

	//$('li:gt(2)').css({'border':'2px solid red'});
	//эл с идексом превышающим указанное в параметре

	//$('li:lt(2)').css({'border':'2px solid red'});
	//эл с идексом менеьшим указанное в параметре

	//$('li:lt(2)').css({'border':'2px solid red'});
	//эл с идексом менеьшим указанное в параметре

	//$('.message:header').css({'border':'2px solid red'});
	//эл которые являются заголовками (теги h1,h2..)

	//$('input:hidden').attr('type','text').css({'border':'2px solid red'});
	//невидимые эл

	//$('input:visible').css({'border':'2px solid red'});
	//видимые эл

	//$('h2:lang(ua)').css({'border':'2px solid red'});
	//эл, в котором указаны языки содержимого

	//$(':root').css({'border':'2px solid red'});
	//корневой єлемнт документа


	/////////////Фильтры Дочерных элементов////////////////

	//$('p:first-child').css({'border':'2px solid red'});
	//первые дочерние эл

	//$('p:last-child').css({'border':'2px solid red'});
	//последние дочерние эл

	//$('p:nth-child(even)').css({'border':'2px solid red'});
	//эл с определенным порядком

	//$('p:nth-child-last()').css({'border':'2px solid red'});
	//четніе нечетніе под оперделеннім индексом

	//$('span:only-child').css({'border':'2px solid red'});
	//четные нечетные под оперделенным индексом

	//$('span:only-of-type').css({'border':'2px solid red'});
	//единственные, потомки заданного типа

	//$('p:first-of-type').css({'border':'2px solid red'});
	//первые, потомки заданного типа

	//$('p:last-of-type').css({'border':'2px solid red'});
	//последние, потомки заданного типа

	//$('p:nth-of-type(2)').css({'border':'2px solid red'});
	//дочерние эл. заданного типа с определенным порядком

	/////////////Фильтры по содержимому///////////////

	//$('p:contains(Gamus)').css({'border':'2px solid red'}); //эл. с заданным текстом

	//$('span:empty').css({'border':'2px solid red'});
	//пустые эл

	//$('h2:has(span)').css({'border':'2px solid red'});
	//эл.котоыре содержат эл. из селектор

	//$('p:parent').css({'border':'2px solid red'});
	//непустые эл
})
