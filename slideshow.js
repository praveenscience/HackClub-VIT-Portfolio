$(function () {
  $(".hidden").hide().removeClass("hidden");
  $(".slides .slide").first().show();
  var counter = 1;
  setInterval(() => {
    $(".slides .slide:visible").fadeOut(function () {
      $(".slides .slide:nth-child(" + ((counter++ % $(".slides .slide").length) + 1) + ")").fadeIn();
    });
  }, 2500);
});
