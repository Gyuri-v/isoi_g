$(document).ready(function(){
    
    
//fadein
$(window).scroll( function(){
    $('.fadein').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
             event.preventDefault();
        if( bottom_of_window > bottom_of_element/1.3 ){
            $(this).animate({'opacity':'1','margin-top':'0px'},1000);
        } 
    });
});


});