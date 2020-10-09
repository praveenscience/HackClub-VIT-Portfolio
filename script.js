// Wait till the DOM is ready.
$(function () {
  var roles = ["Student", "VITian", "Artist"];
  var count = 0;
  setInterval(() => {
    $("#intro .content h2 span").fadeOut("fast", function () {
      $(this).text(roles[count++ % roles.length]);
      $(this).fadeIn("fast");
    });
  }, 1000);
  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});
