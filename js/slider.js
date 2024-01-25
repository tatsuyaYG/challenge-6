// メインビジュアル
$(function () {
  $(".p-slider--main")
    .on("init", function (event, slick) {
      $(this).append('<div class="p-slider--num"><span class="now-count"></span> <span></span> <span class="all-count"></span></div>');
      $(".now-count").text(slick.currentSlide + 1); // 現在のスライド番号(+1が無いと0からスタートしてしまう)
      $(".all-count").text(slick.slideCount); // スライドの総数
    })
    .slick({
      // 通常のスライダー同様、オプションを記入
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      slidesToShow: 1,
      speed: 1500,

    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".now-count").text(nextSlide + 1); // 現在のスライド番号の次のスライドになったら番号を+1
    });
});

$(function () {
  $(".p-slider--about").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    // centerMode: true,
    centerPadding: "30px",
    dots: false,
    slidesToShow: 3,
    speed: 8000,
  });
});

$(function () {
  $(".p-slider--gallery").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "200px",
    dots: false,
    slidesToShow: 2,
    speed: 8000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          centerPadding: "30px",
        }
      }
    ]
  });
});
