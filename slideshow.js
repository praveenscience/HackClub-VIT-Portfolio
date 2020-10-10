$(function () {
  $(".hidden").hide().removeClass("hidden");
  $(".pager").append(new Array($(".slides .slide").length + 1).join("<li></li>"));
  $(".slides .slide").first().show();
  $(".pager li").first().addClass("active");
  var counter = 1;
  setInterval(() => {
    $(".slides .slide:visible").fadeOut(function () {
      curSlide = (counter++ % $(".slides .slide").length) + 1;
      $(".slides .slide:nth-child(" + curSlide + ")").fadeIn();
      $(".pager li.active").removeClass("active");
      $(".pager li:nth-child(" + curSlide + ")").addClass("active");
    });
  }, 2500);
});
