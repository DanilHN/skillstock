$(function() {

    let header = $("#header");
    let intro = $("#intro");

    function checkScroll(p, h) {
        if (p > h) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight() / 100 * 90;
        let scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });





    /*smooth scroll */
    $('[data-scroll]').on('click', function(event) { /*  1 -$('[data-scroll]') - выборка элементов с атрибутом data-scroll 2 -  .on('click' - отслеживание события клик */

        event.preventDefault(); //отменяем обычное поведение при клике на ссылку
        let elementId = $(this).data('scroll'); /*при клике в переменной хранится ID, кот. мы хтим скроллить. data('scroll') - это  data-scroll=""*/
        let elementOffset = $(elementId).offset().top; /* отступ от top до elementId, значение elementId уже с #   */

        nav.removeClass('show'); //убираем после скролла

        $('html, body').animate({
            scrollTop: elementOffset - 70

        }, 700); // отступ на значение elementOffset ( - 70, что ьы не перекрывало блок), }, 700); скорость прокрутки в млс

    });

    /*nav toggle*/
    let nav = $('#nav');

    $('#navToggle').on('click', function(event) { //$('#navToggle') - селектор по id
        event.preventDefault();
        nav.toggleClass('show'); // выдавать класс ('show') для nav
    });


    /* reviews https://kenwheeler.github.io/slick/*/

    let slider = $('#reviewsSlader');

    slider.slick({
        infinite: true, // бесконечно скроллить
        slidesToShow: 1, // отображается слайдов
        slidesToScroll: 1, // скроллит слайдов
        fade: true, // один отзыв затемняется , появляется другой
        arrows: false, // убрать кнопки
        dots: true // точки по д слайдером, стилизация в css
    });

});






/*fixed header
   let header = $("#header");
   let intro = $("#intro");
   let introH;
   let scrollPos = $(window).scrollTop();

   $(window).on("scroll load resize", function() {
       introH = intro.innerHeight() / 100 * 90;
       scrollPos = $(this).scrollTop();

       if (scrollPos > introH) {
           header.addClass("fixed");
       } else {
           header.removeClass("fixed");
       }

   }); */

/* let header = $("#header");
 let intro = $("#intro");
 let introH = intro.innerHeight() / 100 * 90;;
 let scrollPos = $(window).scrollTop();



 checkScroll(scrollPos, introH);

 $(window).on("scroll resize", function() {
     introH = intro.innerHeight() / 100 * 90;
     scrollPos = $(this).scrollTop();
     checkScroll(scrollPos, introH);
 });

 function checkScroll(scrollPos, introH) {
     if (scrollPos > introH) {
         header.addClass("fixed");
     } else {
         header.removeClass("fixed");
     }
 }*/