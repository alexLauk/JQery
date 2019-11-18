//jQuery.noConflict();
jQuery(function($) {

	//////////Поиск по селектору///////////////
	//$('p','.grid_6').html('<h5>Hello</5>'); содержимое элемента

	//$('.grid_6 .el-1').css({'border': '2px solid red'});  //поиск по классу

	//$('#contact-form').css({'border':'2px solid red'}); //поиск по id

	//$('span').css({'border':'2px solid red'}); //поиск тегу

	//$('.container > div').css({'border':'2px solid red'}); //эл., которые являются потомками элементов родителя

	//$('#header + section').css({'border':'2px solid red'});
	// эл., которые следуют непосредственно за преидущими эл. на  одном уровне

	//$('div.grid_12 ~ div').css({'border':'2px solid red'});
	//все эл., которые следуют за предидущим эл. на одном уровне

	//$('[src]').css({'border':'2px solid red'});//эл по имени атрибута

	//$('[name=email]').css({'border':'2px solid red'});
	//эл. у котрых значение атрибута name совпадает c value

	//$('input[name!=email]').css({'border':'2px solid red'});
	//эл. у котрых значение атрибута name не совпадает c value

	//$('div[class^=cont]').css({'border':'2px solid red'}); // эл. у котрых значение атрибута name начинется c value

	//$('[class$=enu]').css({'border':'2px solid red'}); // эл. у котрых значение атрибута name заканачинется c value

	//$('[class*=ta]').css({'border':'2px solid red'}); // эл. у котрых значение атрибута name содержит подстроку value

	//$('[class~= grid_7]').css({'border':'2px solid red'}); // эл. у котрых значение атрибута name содержит слово value

	//$('[class|= full]').css({'border':'2px solid red'}); // эл. у котрых значение атрибута name имеют префикс value ( = value or = value-)

	//$('[class|= full], [name], [data-type=submit]').css({'border':'2px solid red'}); // эл. соответсвующие всем заданим условиям на атрибуті одновременно префикс value
})
