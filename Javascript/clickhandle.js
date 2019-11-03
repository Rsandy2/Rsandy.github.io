$("ul.primary li").click(function(e) {
  e.preventDefault();

  if (
    $(this)
      .siblings("li")
      .find("ul.secondary:visible").length
  ) {
    $("ul.secondary").slideUp("normal");
  }
  $(this)
    .find("ul.secondary")
    .slideToggle("normal");
});

var t1 = new TimelineMax({ paused: true });

t1.to(".menu", 0.8, {
  autoAlpha: 1
});

t1.staggerFrom(
  ".primary li a:not(.secondary li a)",
  1,
  {
    opacity: 0.5,
    y: 10,
    ease: Power3.easeInOut
  },
  0.1
);

t1.from(".secondary", 0.7, {
  autoAlpha: 1
});

t1.staggerFrom(
  ".media ul li",
  1,
  {
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
  },
  0.1,
  "-=2"
);

t1.from(".call", 1, {
  delay: -2,
  opacity: 0,
  y: 10,
  ease: Power3.easeInOut
});

t1.from(".mail", 1, {
  delay: -1.6,
  opacity: 0,
  y: 10,
  ease: Power3.easeInOut
});

t1.reverse();

$(document).on("click", ".menu-btn", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-menu", function() {
  t1.reversed(!t1.reversed());
});

function loadSnack() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);

  var tempE = document.getElementById("buttonStyle");
  tempE.className = "inst";
  setTimeout(function() {
    tempE.className = tempE.className.replace("inst", "");
  }, 3000);
}


function loadSnack2() {
  var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);

  var tempE = document.getElementById("buttonStyle2");
  tempE.className = "inst";
  setTimeout(function() {
    tempE.className = tempE.className.replace("inst", "");
  }, 3000);
}
