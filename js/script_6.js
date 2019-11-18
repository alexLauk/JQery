jQuery(function($) {

})

function func() {
    //let img = $('.grid_4 img');

    // img.hide({
    //     durations: 'fast',
    //     easing: 'linear',
    //     complete: function() {


    //     },
    //     quene: 'fx'
    // });

    //img.hide('slow') // 600 ms
    //img.hide('normal') // 400 ms
    //img.hide('fast') // 200 ms



    // if(img.css('display') != 'none'){
    //     img.hide('slow', function() {
    //         let text = $('<p style="margin:100px: font-size:1.4em;" id="mytext">Some text</p>');

    //         text.insertAfter($(this)).hide().show('slow');

    //     });

    // } else {
    //     $('#mytext').hide(200, function() {
    //         img.show('slow');
    //         $(this).remove();

    //     })
    //     img.show('slow');
    // }

    // img.toggle({
    //     durations: 'fast',
    //     easing: 'linear',
    //     complete: function() {


    //     },
    //     quene: 'fx'
    // });

    // if(img.css('display') != 'none'){
    //     img.slideUp('slow', function() {
    //         let text = $('<p style="margin:100px: font-size:1.4em;" id="mytext">Some text</p>');

    //         text.insertAfter($(this)).hide().show('slow');

    //     });

    // } else {
    //     $('#mytext').hide(200, function() {
    //         img.slideDown('slow');
    //         $(this).remove();

    //     })
    // }

    // img.slideToggle({
    //     durations: 'fast',
    //     easing: 'linear',
    //     complete: function() {


    //     },
    //     quene: 'fx'
    // });


    // if(img.css('display') != 'none'){
    //     img.fadeOut('slow', function() {
    //         let text = $('<p style="margin:100px: font-size:1.4em;" id="mytext">Some text</p>');

    //         text.insertAfter($(this)).hide().show('slow');

    //     });

    // } else {
    //     $('#mytext').hide(200, function() {
    //         img.fadeIn('slow');
    //         $(this).remove();

    //     })
    // }


    // img.fadeToggle({
    //     durations: 'fast',
    //     easing: 'linear',
    //     complete: function() {


    //     },
    //     quene: 'fx'
    // });

    // img.fadeTo(1000, 1, function() {

    // });

    /////Слайдер //////////////////////////////

    // let slideWidth = $('.slide-item').outerWidth();
    // let slideWrap = $('.slide-wrap');
    // let scrollSlider = slideWrap.position().left - slideWidth; /// значение на котрое необходимо сместить предидущую картинку, чтобы показать следующую

    // function sl() {
    //     slideWrap.animate({
    //                         'left': scrollSlider
    //                         },1000,'linear', function() {
    //                             slideWrap.find('.slide-item:first')
    //                             .appendTo(slideWrap)
    //                             .parent()
    //                             .css({'left':0});

    //                         });

    // }

    // setInterval(sl, 2000);

    ////////////Очередь анимации////////////

    // $('.grid_12 h2')
    // .hide(1000)
    // .fadeIn(500)
    // .queue(function () {
    //     $(this).text('Some Text');
    //     $(this).dequeue();
    // })
    // //.stop() остановка анимации
    // .animate({'fontSize':'100px'})
    // .slideUp(300)
    // .show(400);


    // $('.grid_12 h2')
    // .queue('myqueue', function() {

    //     $(this).animate({'fontSize':'100px'});
    //     $(this).dequeue('myqueue');

    // })
    // .delay(1000,'myqueue')
    // .queue('myqueue', function() {

    //     $(this).text('Some text');
    //     $(this).dequeue('myqueue');

    // })
    // .queue('myqueue', function() {

    //     $(this).hide(700).show(700);
    //     $(this).dequeue('myqueue');

    // });

    // $('.grid_12 h2').dequeue('myqueue');

}
