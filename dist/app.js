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

(function () {
  function initThisComponent() {
    var partnerSliders = document.querySelectorAll(".partners-carousel")
    if (partnerSliders) {
        partnerSliders.forEach (slider => {
          tns({
            container: slider,
            items: 1,
            slideBy: 'page',
            arrowKeys: true,
            controlsText: ["<i class='material-icons prev'>keyboard_arrow_left</i>", "<i class='material-icons next'>keyboard_arrow_right</i>"],
            navPosition: 'bottom'
          });
        })
    }
  }
  if( document.readyState !== 'loading' ) {
    initThisComponent();
  } else {
    document.addEventListener("DOMContentLoaded", initThisComponent, false);
  }
})();

(function(){
	function initThisComponent() {
		var sliders = document.querySelectorAll('.featured-resources-container')
		if (sliders) {
      var slider = tns({
        container: '.featured-resources-container',
        items: 1,
        slideBy: 'page',
        arrowKeys: true,
        controlsText: ["<i class='material-icons prev'>keyboard_arrow_left</i>", "<i class='material-icons next'>keyboard_arrow_right</i>"],
        navPosition: 'bottom',
        gutter: 16,
        responsive: {
          1024: {
            items: 3
          }
        }
      });
		}
	}

  if( document.readyState !== 'loading' ) {
    initThisComponent();
  } else {
    document.addEventListener("DOMContentLoaded", initThisComponent, false);
  }
})();

(function () {
  function initThisComponent() {
    var totalTables = document.querySelectorAll(".total-table")

    totalTables.forEach(table => {
      var selectList = table.querySelectorAll(".select-container");
      selectList.forEach(select => {
        var totalContainer = table.querySelector(".total-row")
        var selectDropdown = select.querySelector("select")
        var selectParent = select.parentElement
        var totalChildren = totalContainer.querySelectorAll("td")
        selectDropdown.addEventListener("change", () => {
          var numberToAdd = parseInt(selectDropdown.value)
          totalChildren.forEach (child => {
            if (child.getAttribute("data-label") == selectParent.getAttribute("data-label")) {
              if (!isNaN(numberToAdd)) {
                var num = parseInt(child.querySelector("input").value)
                child.querySelector("input").value = num + numberToAdd
              }
              else {
                numberToAdd = 0
              }
              if (select.hasAttribute("prev-val")) {
                var numToSubtract = parseInt(select.getAttribute("prev-val"))
                if (!isNaN(numToSubtract)) {
                  child.querySelector("input").value -= numToSubtract
                }
              }
            }
          });
          select.setAttribute("prev-val", numberToAdd)
        })
      })
    });
  }
  if( document.readyState !== 'loading' ) {
    initThisComponent();
  } else {
    document.addEventListener("DOMContentLoaded", initThisComponent, false);
  }
})();