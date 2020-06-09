$(document).ready(function(){
   $(window).scroll(function(){
       var sc=$(window).scrollTop();
       if(sc>=1){
           $('header').addClass('active');
           $('header').css({background:'#fff'}); 
           $('header').css({boxShadow: '5px 8px 15px #f2f2f2'}); 
           $('.header_box').css({width:'1200px'});
           $('.header_top').hide();
           $('.header_box').css({padding:'0'});
           $('.header_box').css({margin:'0 auto'});
           $('.logo').css({lineHeight:'80px'});
           $('.menu_box').css({lineHeight:'80px'});
           $('.menu2_box').css({top:'81px'});
           $('.menu3_box').css({top:'81px'});
           $('.menu_box>li').css({height:'80px'});
       }
       else{
           $('header').removeClass('active');
           $('header').css({background:'#fff'});
           $('header').css({boxShadow: 'none'});
           $('.header_box').css({width:'100%'});
           $('.header_box').css({padding:'0 5%'});
           $('.header_top').show();
           $('.logo').css({lineHeight:'150px'});
           $('.menu_box').css({lineHeight:'150px'});
           $('.menu2_box').css({top:'161px'});
           $('.menu3_box').css({top:'161px'});
           $('.menu_box>li').css({height:'160px'});
       }
   });
    $('.menu2_box').hide();
    $('.menu3_box').hide();
    $('.header_f').hover(function(){
        $('.menu2_box').slideDown();
    }, function(){
        $('.menu2_box').slideUp();
    });
    $('.header_f2').hover(function(){
        $('.menu3_box').slideDown();
    }, function(){
        $('.menu3_box').slideUp();
    });
    $('.menu').hover(function(){
       $('header').css({backgroundColor:'#fff'}); 
        $('header').css({borderBottom:'1px solid #f2f2f2'}); 
        $('header').css({transitionDuration:'0s'});
    });
    $('.menu').mouseout(function(){
       $('header').css({background:'none'}); 
        $('header').css({borderBottom:'none'});
        $('header').css({transitionDuration:'0.5s'});
    });
});