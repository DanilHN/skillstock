$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollTos = $(window).scrollTop();



    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight() / 100 * 90;
        scrollTos = $(this).scrollTop();

        if (scrollTos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        console.log(introH);
    });











});