
// ↓ index main-banner slick slide-event
$(document).ready(function(){
            $(".slide").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 2500,
                arrows: false,
                dots :true
            })
        })

// ↓ index review right slick slide-event
$('.review_track').slick({
    centerMode: true,
    centerPadding: '10%',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },  
        {
            breakpoint: 769,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
});
            
// ↓ index review left slide java
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("rev_ul");
    if (n > slides.length){slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
}
 

// ↓ index review slick click-event
$(document).ready(function(){ 
    $('.slick-prev').attr("onclick","plusSlides(-1)")
    $('.slick-next').attr("onclick","plusSlides(1)")
})



$(document).ready(function(){
    
    $(function(){
        var wd = $(window).width();
        if(wd <769){
            $('.slider1').attr({src:'img/index/slidem1.png'});
            $('.slider2').attr({src:'img/index/slidem2.png'});
            $('.slider3').attr({src:'img/index/slidem3.png'});
        }
        else{
            $('.slider1').attr({src:'img/index/slide1.png'});
            $('.slider2').attr({src:'img/index/slide2.png'});
            $('.slider3').attr({src:'img/index/slide3.png'});
        }
    });
    
    
    // ↓ index best jQuery event
    $('#go_box1').hide();
    $('#go_box2').hide();
    $('#go_box3').hide();
    $('#go_box4').hide();
    $('#go_box5').hide();
    $('#go_box6').hide();
    $('#pro_box1').hover(function(){
       $('#go_box1').fadeIn(); 
    }, function(){
       $('#go_box1').fadeOut();
    });
    $('#pro_box2').hover(function(){
       $('#go_box2').fadeIn(); 
    }, function(){
       $('#go_box2').fadeOut();
    });
    $('#pro_box3').hover(function(){
       $('#go_box3').fadeIn(); 
    }, function(){
       $('#go_box3').fadeOut();
    });
    $('#pro_box4').hover(function(){
       $('#go_box4').fadeIn(); 
    }, function(){
       $('#go_box4').fadeOut();
    });
    $('#pro_box5').hover(function(){
       $('#go_box5').fadeIn(); 
    }, function(){
       $('#go_box5').fadeOut();
    });
    $('#pro_box6').hover(function(){
       $('#go_box6').fadeIn(); 
    }, function(){
       $('#go_box6').fadeOut();
    });
    
    // ↓ index new fadIn-event
    $(window).scroll( function(){
        //fadein
        $('.fadein').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            event.preventDefault();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px'},1000);
            }       
        });        
    });
    
    
    
});