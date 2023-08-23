$(window).scroll(function(){
    if($(this).scrollTop() > 600)
    {
        $(".backToTop").fadeIn(1000);
    }
    else{
        $(".backToTop").fadeOut(1000);
    }
});