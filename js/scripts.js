$(document).ready(function() {
  var movementStrength = 20;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#landingPageBackground").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('#landingPageBackground').css("background-position", newvalueX + "px     " + newvalueY + "px");
  });
});

$(document).ready(function() {
  var movementStrength = 30;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#landingPageText").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1;
    var newvalueY = height * pageY * -1;
    $('#landingPageText').css("padding-left", newvalueX + "px     ");
    $('#landingPageText').css("padding-top", newvalueY + "px     ");
  });
});
