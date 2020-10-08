// Wait till the DOM is ready.
$(function () {
  var roles = ["Student", "VITian", "Artist"];
  var count = 0;
  setInterval(() => {
    $("#intro .content h2 span").text(roles[count++ % roles.length]);
  }, 1000);
});
