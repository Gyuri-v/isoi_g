$(document).ready(function(){
    
    // ↓ fullpage jQuery plug-in
    $('#fullpage').fullpage({
        sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#fec401'],
        navigation: true,
        slidesNavigation: true,
    });

    $('#moveSectionUp').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

    $('#moveSectionDown').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });
    
    // ↓ m navigation open event
    $('#mnav').click(function(){
        $('#mmenu').animate({width:'100%'});
    });
    $('.mlnb').hide();
    $('.lnb').click(function(){
        $(this).children('.mlnb').slideToggle();
    });
    
    $('.close').click(function(){
        $('#mmenu').animate({width:'0%'});
    });
    
    
});