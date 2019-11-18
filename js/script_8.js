/////////////////Событие загрузки страницы///////////////////
/*
jQuery(document).ready(function() {

})

jQuery('h2').load(function() {

})

jQuery(window).unload(function() {
     alert('Hi')
})
 */

 ////////////////Событие браузера//////////////////////
 /* jQuery('img').error(function() {

})

jQuery(window).resize(function() {
    alert('Hi')
})
 */


jQuery(function($) {

    /* jQuery(window).scroll(function() {
        console.log($(this).scrollTop());

        if($(this).scrollTop() > 500) {
            $('#scroll').fadeIn(500); // добавляем кнопку UP
        }
    })

    $('#scroll').click(function(){
        $(window).scrollTop(0); // поднимаем скролл вверх
    })
 */


    /* $('.sf-menu li').on('click', function(e) {
        e.preventDefault();
        $('.sf-menu').append($('<li><a href="index-2.html">Item 1</a></li>'))
    }) */

    /* $('.sf-menu').on('click','li', function(e) { //   делегирование события, для обработки динамических эл.
        e.preventDefault();
        $('.sf-menu').append($('<li><a href="index-2.html">Item 1</a></li>'))
    }) */

    //$('.sf-menu').off() // удаление обработчика

    /* $('.sf-menu').delegate('li','click',function(){
        e.preventDefault();
        $('.sf-menu').append($('<li><a href="index-2.html">Item 1</a></li>'))
    }) // делегирование события (аналог оn) */

    /* $('.sf-menu').one('click',function(e){
        e.preventDefault();
        $('.sf-menu').append($('<li><a href="index-2.html">Item 1</a></li>'))
    }) // события срабатывает всего один раз */

    /* $('.sf-menu li').click(function(e){
        e.preventDefault();
        $('.sf-menu').append($('<li><a href="index-2.html">Item 1</a></li>'))
    })

    $('.sf-menu li').trigger('click'); // инициализация стандартного обработчика
    */

    // инициализация пользовательского обработчика
    /* $('.sf-menu li').on('myEvent',function(){

        $('.sf-menu').append($('<li><a href="index-2.html">Item 1</a></li>'))
    })

    $('.sf-menu li').click(function(e){
        e.preventDefault();
        $(this).trigger('myEvent'); // инициализация пользовательского обработчика
    })
 */

    //$('.sf-menu li').triggerHandler('click') // инициализация функции обработчика





})
