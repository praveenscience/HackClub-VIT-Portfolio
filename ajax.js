$(function () {
  var resDiv = $(".response").hide();
  $("form").submit(function (e) {
    e.preventDefault();
    var username = $("#username").val();
    resDiv.fadeOut(function () {
      $.getJSON("https://api.github.com/users/" + username, function (res) {
        resDiv.html(res.name ? "Hello <strong>" + res.name + "</strong>!" : "You are not to be named!").fadeIn();
      });
    });
  });
});
