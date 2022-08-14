$(function(){


    //Fixed header//

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkSkroll(scrollPos, introH);


    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkSkroll(scrollPos, introH);

    });

    function checkSkroll () {        
        if(scrollPos > introH) {
        header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }



    }


    //smooth scroll//
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate ({
            scrollTop: elementOffset -95
        }, 1000);
    });

    // navToggle


    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        
    });

});