$(document).ready(function () {
    x = {                    //slider index
        "slide-1": ".img-1",
        "slide-2": ".img-2",
        "slide-3": ".img-3"
    };

    $(".bullet").click(function () {  //slider & bullets
        console.log(x[this.id]);
        $(".bullet").removeClass("active-bullet");
        $(".images li").removeClass("active");
        $(this).addClass("active-bullet");
        $(x[this.id]).addClass("active");
    });

    $("button.scroll").mouseenter(function () { //jumping arrows
        $("button.scroll").addClass("jump");
    }).mouseleave(function () {
        $("button.scroll").removeClass("jump");
    });

    $("button.scroll").click(function () {  // animate scroll + prevent on scroll
        console.log('scroll');
        $("html, body").animate({scrollTop: $("#our-work").offset().top - 50}, 1800, "easeInOutQuint").mousewheel(function() {
            $('html, body').stop();
        })
    })
});
