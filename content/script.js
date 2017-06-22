$(document).ready(function(){
    $(".homenav").click(function() {
    $('html,body').animate({
        scrollTop: $(".home").offset().top},
        'slow');
    });
    
     $(".aboutnav").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
    });
});
