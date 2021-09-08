(function(){
	function initThisComponent() {
    var nav = document.querySelector('.nav');
		if (nav) {
			initNav();
    }

		function initNav () {
      var navToggle = nav.querySelector('.nav-toggle');
      var navMenu = nav.querySelector('.nav-container');
      var overlay = document.querySelector('.overlay')

      var navL1Links = nav.querySelectorAll('.nav-l1-link');
      for (let i = 0; i < navL1Links.length; i++) {
        navL1Links[i].addEventListener("click", function(event) {
          navL1Links.forEach((navLink, index) => {
            if (index != i) {
              navLink.setAttribute('aria-expanded', "false")
            }
          })
          if (navL1Links[i].getAttribute("aria-expanded") == "true") {
            if (!navL1Links[i].querySelector(".nav-l2-container").contains(event.target)) {
              navL1Links[i].setAttribute('aria-expanded', "false")
              overlay.classList.remove("overlay--active")
            }
          }
          else {
            navL1Links[i].setAttribute('aria-expanded', "true")
            overlay.classList.add("overlay--active")
          }
        } , false)
      }
      
      document.body.addEventListener("click", function(event) {
        var isClickInside = document.querySelector(".nav-links").contains(event.target);
        if (!isClickInside) {
          for (let i = 0; i < navL1Links.length; i++) {
            navL1Links[i].setAttribute('aria-expanded', "false")
            overlay.classList.remove("overlay--active")
          }
        }
      } , false)

      navToggle.addEventListener("click", () =>{
        if (navMenu.getAttribute("aria-expanded") == "true") {
          navMenu.setAttribute('aria-expanded', "false")
        }
        else {
          navMenu.setAttribute('aria-expanded', "true")
        }

      } , false)

    }
  }
  if( document.readyState !== 'loading' ) {
    initThisComponent();
  } else {
      document.addEventListener("DOMContentLoaded", initThisComponent, false);
  }
})();