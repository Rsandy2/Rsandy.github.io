      // Menu-toggle button

      $(document).ready(function() {
        $(".menu-icon").on("click", function() {
              $("nav ul").toggleClass("showing");
        });
  });

  // Scrolling Effect

  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('header').addClass('active');
        }

        else {
              $('header').removeClass('active');
        }
  })
