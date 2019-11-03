// const container = document.querySelector("div.container")
// container.scrollTop = 300
// console.log(container)

function myFunction() {
  var elmnt = document.getElementById("container");
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementById("demo").innerHTML =
    "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}

// var header = $("header");
//   $("div#container").scroll(function(){
//     var scroll = $('#container').scrollTop();
//   if (scrollPosY > 200) {
//       header.removeClass('header').addClass("colorc");
//   } else {
//       header.removeClass("colorc").addClass('header');
// });
// });

// $(function() {
//   var navbar = $(".navbar");
//   $(window).scroll(function() {
//       var scroll = $(window).scrollTop();
//       var elmnt = document.getElementById("container");
//       var x = elmnt.scrollLeft;
//       var y = elmnt.scrollTop;
//       if (y >= 200) {
//           navbar.removeClass('navbar').addClass("navbar-inv");
//           console.log('help')
//       } else {
//           navbar.removeClass("navbar-inv").addClass('navbar');
//       }
//   });
// });

$(document).ready(function() {
  var navbar = $(".navbar");
  $("#container").scroll(function() {
    if ($("#container").scrollTop() > 200) {
      navbar.removeClass("navbar").addClass("navbar-inv");
    } else {
      navbar.removeClass("navbar-inv").addClass("navbar");
    }
  });
});

$(document).ready(function() {
  var header = $("header");
  $("#container").scroll(function() {
    if ($("#container").scrollTop() > 200) {
      header.removeClass("header").addClass("colorc");
    } else {
      header.removeClass("colorc").addClass("header");
    }
  });
});

$(document).ready(function() {
  var templogo = $(".tempLogo");
  $("#container").scroll(function() {
    if ($("#container").scrollTop() > 200) {
      templogo.removeClass("tempLogo").addClass("tempLogos");
    } else {
      templogo.removeClass("tempLogos").addClass("tempLogo");
    }
  });
});

$(window).scroll(function() {
  var wintop = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();

  var scrolled = (wintop / (docheight - winheight)) * 100;

  $(".scroll-line").css("width", scrolled + "%");
});

$(document).ready(function() {
  $("#container").scroll(function() {
    var wintop = $("#container").scrollTop(),
      docheight = $(document).height(),
      winheight = $("#container").height();

    var scrolled = ((wintop / winheight) * 100) / 3;
    console.log(scrolled);
    $(".scroll-line").css("width", scrolled + "%");
  });
});

// function scrollecho(){
// var scrollP = $("#container").scrollTop()
// var height = $(document).height()
// var winheight = $("#container").height();
// var scrolled = (scrollP/(height-winheight)) * 100
// console.log(winheight)

// $('.scroll-line').css('width', (scrolled + '%'));
// }

// $(document).ready(function(){
// $("#container").scroll(function(){
//   scrollecho();
// });
// });

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
    h = h - 12;
    ampm = " PM";
  } else if (h == 12) {
    h = 12;
    ampm = " AM";
  } else if (h < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (h == 0) {
    h = 12;
  }

  document.getElementById("display").innerHTML = h + ":" + m + ampm;
  var t = setTimeout(function() {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
//date
function startDate() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  document.getElementById("date").innerHTML =
    days[d.getDay()] +
    " | " +
    [d.getMonth() + 1] +
    "/" +
    d.getDate() +
    "/" +
    d.getFullYear();
}


var rgb = $('#display').css('color');
var colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
var brightness = 1;

var r = colors[1];
var g = colors[2];
var b = colors[3];

var ir = Math.floor((255-r)*brightness);
var ig = Math.floor((255-g)*brightness);
var ib = Math.floor((255-b)*brightness);

$('#display').css('color', 'rgb('+ir+','+ig+','+ib+')');


var rgb = $('#date').css('color');
var colors = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
var brightness = 1;

var r = colors[1];
var g = colors[2];
var b = colors[3];

var ir = Math.floor((255-r)*brightness);
var ig = Math.floor((255-g)*brightness);
var ib = Math.floor((255-b)*brightness);

$('#date').css('color', 'rgb('+ir+','+ig+','+ib+')');
