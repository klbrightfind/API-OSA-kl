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