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