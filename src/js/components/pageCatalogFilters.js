if (document.getElementById("page1Identifier")) {
  const listItems = document.querySelectorAll(
    ".catalog__filters-gab_item-piece"
  );

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      listItems.forEach((otherItem) => otherItem.classList.remove("active"));
      this.classList.add("active");
    });
  });

  //Фильтры
  var x, i, j, l, ll, selElmnt, a, b, c;

  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;

    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  document.addEventListener("click", closeAllSelect);

  //Mobile Filters
  function toggleMobileFilters() {
    const mobileFilters = document.getElementById("mobileFilters");
    mobileFilters.classList.toggle("show");

    const mobileFiltersOverlay = document.getElementById("mobileOverlay");
    mobileFiltersOverlay.classList.toggle("show");

    const body = document.body;
    if (mobileFilters.classList.contains("show")) {
      body.style.overflow = "hidden"; // З
    } else {
      body.style.overflow = "auto"; //
    }
  }

  function showMobileFilters() {
    const openMobileFilters = document.getElementById("openButtonFilters");
    openMobileFilters.addEventListener("click", toggleMobileFilters);

    const closeMobileFilters = document.getElementById("closeButtonFilters");
    closeMobileFilters.addEventListener("click", toggleMobileFilters);

    const closeMobileFiltersBtn = document.getElementById("close-mobile-btn");
    closeMobileFiltersBtn.addEventListener("click", toggleMobileFilters);
  }

  showMobileFilters();

  //Mobile Categoty
  function toggleMobileCategoty() {
    const mobileCategory = document.getElementById("mobileCategory");
    mobileCategory.classList.toggle("show");

    const mobileCategoryOverlay = document.getElementById(
      "mobileCategoryOverlay"
    );
    mobileCategoryOverlay.classList.toggle("show");

    const body = document.body;
    if (mobileCategory.classList.contains("show")) {
      body.style.overflow = "hidden"; // З
    } else {
      body.style.overflow = "auto"; //
    }
  }

  function showMobileCategory() {
    const openMobileCategory = document.getElementById("openButtonCategory");
    openMobileCategory.addEventListener("click", toggleMobileCategoty);

    const closeMobileCategory = document.getElementById("closeButtonCategory");
    closeMobileCategory.addEventListener("click", toggleMobileCategoty);
  }

  showMobileCategory();
}
