$(document).ready(function() {
    $('.menu-icon').on('click', function() {
        $('nav ul').toggleClass('showing');
    });
});

$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});

function slowScroll(id) {
    $('html, body').animate({
       scrollTop: $(id).offset().top 
    }, 500);
};

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});