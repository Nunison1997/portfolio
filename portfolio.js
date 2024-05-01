
$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
});

$(function(){
  
    //カーソル要素の指定
    var cursor=$("#cursor");
    
    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove",function(e){
                 //カーソルの座標位置を取得
      var x=e.clientX;
      var y=e.clientY;
      //カーソル要素のcssを書き換える用
      cursor.css({
        "opacity":"0.3",
        "top":y+"px",
        "left":x+"px"
      });
    });
  });

  $(document).ready(function() {
    var pagetop = $('.pagetop');
      $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
              pagetop.fadeIn();
         } else {
              pagetop.fadeOut();
              }
         });
         pagetop.click(function () {
             $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
     });
  });