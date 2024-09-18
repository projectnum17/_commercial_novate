if (!document.getElementById("page3Identifier")) {
  //header burger
  function toggleMobileMenu() {
    const mobileWrapper = document.querySelector(".header__mobile-wrapper");
    mobileWrapper.style.display =
      mobileWrapper.style.display === "block" ? "none" : "block";

    const body = document.body;
    body.style.overflow =
      mobileWrapper.style.display === "block" ? "hidden" : "auto";
  }

  function setupMobileMenu() {
    const burgerButton = document.querySelector(".header__burger");
    burgerButton.addEventListener("click", toggleMobileMenu);

    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", toggleMobileMenu);
  }
  document.addEventListener("DOMContentLoaded", setupMobileMenu);

  //header contact
  function toggleMobileContact() {
    const mobileContact = document.getElementById("mobileContact");
    mobileContact.classList.toggle("show");

    const body = document.body;
    if (mobileContact.classList.contains("show")) {
      body.style.overflow = "hidden"; // З
    } else {
      body.style.overflow = "auto"; //
    }
  }

  function setupMobileContact() {
    const openButtonContact = document.getElementById("openButtonContact");
    openButtonContact.addEventListener("click", toggleMobileContact);

    const closeButtonContact = document.getElementById("closeButtonContact");
    closeButtonContact.addEventListener("click", toggleMobileContact);
  }

  document.addEventListener("DOMContentLoaded", setupMobileContact);

  //_________________mobile dropdown_____________________________
  const burgerButton = document.querySelector(".header__burger");
  burgerButton.addEventListener("click", toggleMobileMenu);

  document.addEventListener("DOMContentLoaded", function () {
    const customDropdowns = document.querySelectorAll(".custom-dropdown");

    customDropdowns.forEach((customDropdown) => {
      const customDropbtn = customDropdown.querySelector(".custom-dropbtn");
      const dropdownArrow = customDropdown.querySelector(".dropdown-arrow");

      customDropbtn.addEventListener("click", function () {
        customDropdown.classList.toggle("active");
        dropdownArrow.classList.toggle("rotated");
      });

      customDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });

    window.addEventListener("click", function () {
      customDropdowns.forEach((customDropdown) => {
        customDropdown.classList.remove("active");
        customDropdown
          .querySelector(".dropdown-arrow")
          .classList.remove("rotated");
      });
    });
  });

  //___________________cart body scroll___________________________
  const cartContainer = document.querySelector(".cart-container");
  const overlayHover = document.querySelector(".overlay-hover");
  //const body = document.body;

  /* cartContainer.addEventListener("mouseenter", () => {
    body.classList.add("no-scroll");
  });

  cartContainer.addEventListener("mouseleave", () => {
    body.classList.remove("no-scroll");
  });

  overlayHover.addEventListener("click", () => {
    body.classList.remove("no-scroll");
  }); */

  //cart overlay

  const itemsContainer = document.querySelector(".items-cart__container");
  const cartFooter = document.querySelector(".cart-content__footer");

  function updateReachedEndClass() {
    const scrollOffset = itemsContainer.scrollTop;
    const containerHeight = itemsContainer.clientHeight;
    const contentHeight = itemsContainer.scrollHeight;

    const lastItem = itemsContainer.querySelector(
      ".cart-content__items:last-child"
    );
    if (lastItem) {
      const lastItemBottom = lastItem.offsetTop + lastItem.offsetHeight;

      if (scrollOffset + containerHeight >= lastItemBottom) {
        cartFooter.classList.add("reached-end");
      } else {
        cartFooter.classList.remove("reached-end");
      }
    }

    if (containerHeight >= contentHeight) {
      cartFooter.classList.add("reached-end");
    } else {
      cartFooter.classList.remove("reached-end");
    }
  }

  const observer = new MutationObserver(updateReachedEndClass);
  observer.observe(itemsContainer, { childList: true });

  itemsContainer.addEventListener("scroll", updateReachedEndClass);

  const resizeObserver = new ResizeObserver(updateReachedEndClass);
  resizeObserver.observe(itemsContainer);

  //___________________cart hover____________________________________
  function initializeCartCountControls() {
    let cartItems = document.querySelectorAll(".cart-content__items");

    const cartHoverTotalSum = document.getElementById("cartHoverTotalSum");

    function updateTotalSum() {
      let totalSum = 0;

      cartItems.forEach((cartItem) => {
        const cartHoverPrice = cartItem.querySelector(".header-sum");
        const cartHoverCount = cartItem.querySelector(".cart-hover__count");

        const price = parseInt(cartHoverPrice.dataset.price);
        const count = parseInt(cartHoverCount.textContent);

        totalSum += price * count;
      });

      cartHoverTotalSum.textContent = `${totalSum} грн.`;
    }

    function updateMinusButtonColor(cartHoverMinus, cartHoverCount) {
      const minCount = 1;
      const count = parseInt(cartHoverCount.textContent);

      // Получаем SVG-иконку из кнопки "минус"
      const svgIcon = cartHoverMinus.querySelector("svg");

      // Если количество товаров больше единицы, меняем цвет линии внутри SVG
      if (count > minCount) {
        svgIcon.querySelector("path").setAttribute("stroke", "#89ACF2");
      } else {
        svgIcon.querySelector("path").setAttribute("stroke", "#C8C8C8");
      }
    }

    function setupCartItem(cartItem) {
      const cartHoverMinus = cartItem.querySelector(".cart-hover__minus");
      const cartHoverPlus = cartItem.querySelector(".cart-hover__plus");
      const cartHoverCount = cartItem.querySelector(".cart-hover__count");
      const cartHoverPrice = cartItem.querySelector(".header-sum");
      const cartHoverTrash = cartItem.querySelector(
        ".cart-content__items-right__delete"
      );

      const minCount = 1;

      cartHoverMinus.addEventListener("click", () => {
        const count = parseInt(cartHoverCount.textContent);
        if (count > minCount) {
          cartHoverCount.textContent = count - 1;
          updateMinusButtonColor(cartHoverMinus, cartHoverCount);
          updateTotalSum();
        }
      });

      cartHoverPlus.addEventListener("click", () => {
        cartHoverCount.textContent = parseInt(cartHoverCount.textContent) + 1;
        updateMinusButtonColor(cartHoverMinus, cartHoverCount);
        updateTotalSum();
      });

      cartHoverTrash.addEventListener("click", () => {
        cartItem.remove();

        // Преобразуем NodeList в массив
        const cartItemsArray = Array.from(cartItems);

        // Находим индекс удаляемого элемента
        const indexToRemove = cartItemsArray.indexOf(cartItem);

        // Если индекс найден, удаляем элемент из массива
        if (indexToRemove !== -1) {
          cartItemsArray.splice(indexToRemove, 1);
        }

        // Присваиваем обновленный массив cartItems
        cartItems = cartItemsArray;

        updateTotalSum();
      });

      updateMinusButtonColor(cartHoverMinus, cartHoverCount);
    }

    cartItems.forEach(setupCartItem);
    updateTotalSum();
  }

  initializeCartCountControls();
}
