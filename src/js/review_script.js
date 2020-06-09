//rev_best  = best top 3 슬라이드 - mobile

//$(window).resize(function() {
                        
if($(window).width() <769) { 

$('.best_list').slick({
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

}
//})

//rev 최신순 / 추천순 클릭시 rev_list변화 & css변화

$(document).ready(function(){
    $('.rev_list_recommend').hide();
    $('.rev_lastest').click(function(){
        $('.rev_list_lastest').fadeIn();
        $('.rev_list_recommend').fadeOut();
        $(this).css({
            color: '#fa3a61',
            borderTop: '1px solid #fa3a61'
        });
        $('.rev_recommend').css({
            color: '#222',
            borderTop: 'none'
        })
    })
    $('.rev_recommend').click(function(){
        $('.rev_list_recommend').fadeIn();
        $('.rev_list_lastest').fadeOut();
        $(this).css({
            color: '#fa3a61',
            borderTop: '1px solid #fa3a61'
        });
        $('.rev_lastest').css({
            color: '#222',
            borderTop: 'none'
        })
    })
})