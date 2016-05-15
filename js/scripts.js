$(document).ready(function() {
  var movementStrength = 30;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#landingPageBackground").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    $('#landingPageBackground').css("background-position", newvalueX + "px     " + newvalueY + "px");
  });
  $("#name1").css("display", "inline-block").addClass("animated pulse");
  $("#name2").css("display", "inline-block").addClass("animated fadeIn");
  $("#underName").addClass("animated fadeIn");

  //Set state of expand/collapse buttons
  var state = true;
  $('#learnMore1').click(function() {
    if (state) {
      $("#learnMore1").attr('src', 'img/minus_lime.png');
      state=false;
    } else {
      $("#learnMore1").attr('src', 'img/plus_lime.png');
      state=true;
    }
  });
  var state = true;
  $('#learnMore2').click(function() {
    if (state) {
      $("#learnMore2").attr('src', 'img/minus_lime.png');
      state=false;
    } else {
      $("#learnMore2").attr('src', 'img/plus_lime.png');
      state=true;
    }
  });
  var state = true;
  $('#learnMore3').click(function() {
    if (state) {
      $("#learnMore3").attr('src', 'img/minus_lime.png');
      state=false;
    } else {
      $("#learnMore3").attr('src', 'img/plus_lime.png');
      state=true;
    }
  });
});
