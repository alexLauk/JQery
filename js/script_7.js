jQuery(function($) {

    //////////////////////Событие Мышки///////////////////////////
    /* выпадающее меню 1-й способ
    $('.sf-menu li:has("ul")').mouseenter({a:'hello', b:'world'},function (event) {
        $('.sf-menu li ul').stop().fadeIn(300);

    }) // mouseenter не обладает свойством всплытия

    $('.sf-menu li:has("ul")').mouseleave({a:'hello', b:'world'},function (event) {
        $('.sf-menu li ul').stop().fadeOut(300);

    }) // mouseleave не обладает свойством всплытия

    $('.sf-menu li:has("ul")').mouseover({a:'hello', b:'world'},function (event) {
        $('.sf-menu li ul').stop().fadeIn(300);

    }) // mouseover обладает свойством всплытия

    $('.sf-menu li:has("ul")').mouseout({a:'hello', b:'world'},function (event) {
        $('.sf-menu li ul').stop().fadeOut(300);

    }) // mouseover обладает свойством всплытия
    */

    /* выпадающее меню 2-й способ
    $('.sf-menu li:has("ul")').hover(
            function() {
                $('.sf-menu li ul').stop().fadeIn(300);
            },
            function() {
                $('.sf-menu li ul').stop().fadeOut(300);
            }
            );
    */

    /* выпадающее меню 3-й способ
    $('.sf-menu li:has("ul")').hover(
            function() {
                $('.sf-menu li ul').stop().fadeToggle(300);
            }
            );
    */

    /* $('header h2').mousemove(function(event) {

        $('.grid_7').text(event.pageX + " | " + event.pageY)

    }) */


    /* $('.sf-menu li:has("ul")').hover(
            function() {
                $('.sf-menu li ul').stop().fadeIn(300);
            },
            function() {
                $('.sf-menu li ul').stop().fadeOut(300);
            }
            );
    $('.sf-menu li ul li').click(function (event) {
        event.preventDefault();

        $('header h2').append('Click');

        //$('.sf-menu li ul').fadeOut(300);

        //$(this).parent().fadeOut(300) // тоже самое через контекст this
    })
    */
    ///////////////////Событие Клавиатуры/////////////////////////
    /* $('input[name=name]').keydown(function(event){
        console.log(event.which);
    }) */

    /* $('input[name=name]').keyup(function(event){

       let email =  $('input[name=email]');
       email.val($(this).val());
    })
    */

    /* $('input[name=name]').keypress(function(event){

        let email =  $('input[name=email]');
        email.val($(this).val());
     }) */

     /////////////////Событие формы///////////////////////

     /* $('input[name=name]').focus(function(){
         $(this).val('Enter text')
     })

     $('input[name=name]').blur(function(){
        alert('Hi');
    }) */

    /* $('input[name=name]').select(function(){
        alert('Hey')
    }) */

    /* $('.btn').click(function(e){
        e.preventDefault();
    }) */

    /* $('form').submit(function(e){
        e.preventDefault();
       console.log($('input[name=name]').val());
    }) */

    /* $('input[name=name]').change(function(){
        let email =  $('input[name=email]');
        email.val($(this).val());
    }) */


})
