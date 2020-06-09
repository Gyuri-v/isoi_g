$(document).ready(function(){
    
        
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
        $('header').css({transitionDuration:'0s'});
    });
    $('.menu').mouseout(function(){
    $('header').css({transitionDuration:'0.5s'});
    });
    
    
    $('header').hover(function(){
        $('header').css({background:'white'});
    }, function(){
        $('header').css({background:'none'});
    });
    
    
    $(function(){
        var wd = $(window).width();
        
        if(wd>1200){
            $(function(){
                $(window).scroll(function(){
                    var scroll = $(window).scrollTop(); 
                    
                    if(scroll >=1){
                        $('header').addClass('active'); 
                        $('.header_box').css({width:'1200px'});
                        $('.header_top').hide();
                        $('.header_box').css({margin:'0 auto'});
                        $('.logo').css({lineHeight:'80px'});
                        $('.menu_box').css({lineHeight:'80px'});
                        $('.menu2_box').css({top:'81px'});
                        $('.menu3_box').css({top:'81px'});
                        $('.menu_box>li').css({height:'80px'});
                    }
                    else{
                        $('header').removeClass('active');
                        $('.header_box').css({width:'100%'});
                        $('.header_top').show();
                        $('.logo').css({lineHeight:'150px'});
                        $('.menu2_box').css({top:'151px'});
                        $('.menu3_box').css({top:'151px'});
                        $('.menu_box').css({lineHeight:'150px'});
                        $('.menu_box>li').css({height:'150px'});                        
                    }
                });                
            });
        }
        else if(wd<=1200 && wd>=768){
            
            $(function(){
                $(window).scroll(function(){
                    var scroll = $(window).scrollTop(); 
                    
                    if(scroll >=1){
                        $('header').addClass('active'); 
                        $('.header_box').css({width:'100%'});
                        $('.header_top').hide();
                        $('.header_box').css({margin:'0 auto'});
                        $('.logo').css({lineHeight:'80px'});
                        $('.menu_box').css({lineHeight:'80px'});
                        $('.menu2_box').css({top:'81px'});
                        $('.menu3_box').css({top:'81px'});
                        $('.menu_box>li').css({height:'80px'});
                    }
                    else{
                        $('header').removeClass('active');
                        $('.header_box').css({width:'100%'});
                        $('.header_top').show();
                        $('.logo').css({lineHeight:'150px'});
                        $('.menu2_box').css({top:'151px'});
                        $('.menu3_box').css({top:'151px'});
                        $('.menu_box').css({lineHeight:'150px'});
                        $('.menu_box>li').css({height:'150px'});
                        $('header').hover(function(){
                            $('header').toggleClass('hactive');
                        });
                    }
                });
            });
            
            
                        
            
        }
        else if(wd<768){
            $(function(){
                $('.logo').css({width:'15%'});
                $(window).scroll(function(){
                    var scroll = $(window).scrollTop(); 
                    
                    if(scroll >=1){
                        $('header').addClass('active'); 
                        $('header').css({height:'80px'});
                        $('.header_top').hide();
                        $('#mnav').css({top:'10px'});
                        $('.logo').css({lineHeight:'80px',marginTop:'0'});
                    }
                    else{
                        $('header').removeClass('active');
                        $('header').css({height:'110px'});
                        $('.header_top').show(); 
                        $('#mnav').css({top:'40px'});
                        $('.logo').css({lineHeight:'110px',marginTop:'20px'});
                    }
                });
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
        }
        
    }); 
    
    
});