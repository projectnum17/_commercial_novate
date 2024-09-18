if (document.getElementById("page3Identifier")) {
  document.addEventListener("DOMContentLoaded", function () {
    const emptyCartMessage = document.querySelector(".empty-cart-message");
    const cartSubtitle = document.querySelector(".cart__article-subtitle");
    let totalSum = 0;

    // Сначала подсчитываем сумму всех уже имеющихся на странице товаров
    const existingItems = document.querySelectorAll(
      ".cart__article-products_item"
    );
    existingItems.forEach((item) => {
      const functionPrice = parseInt(
        item.querySelector(".function-price").textContent
      );
      const quantity = parseInt(item.querySelector(".cart-num").textContent);
      totalSum += functionPrice * quantity;
    });

    updateTotalSum(0); // Обновляем общую сумму

    const deleteButtons = document.querySelectorAll(".trash-item");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const cartLine = button.closest(".cart-container__line");
        const functionPrice = parseInt(
          cartLine.querySelector(".function-price").textContent
        );
        const quantity = parseInt(
          cartLine.querySelector(".cart-num").textContent
        );
        const priceChange = -(functionPrice * quantity);
        updateTotalSum(priceChange);

        cartLine.remove();

        if (document.querySelectorAll(".cart-container__line").length === 0) {
          emptyCartMessage.style.display = "block";
          cartSubtitle.style.display = "none";
        } else {
          emptyCartMessage.style.display = "none";
          cartSubtitle.style.display = "block";
        }
      });
    });

    const cartItems = document.querySelectorAll(".cart__article-products_item");

    cartItems.forEach((item) => {
      const minusButton = item.querySelector(".minus-cart");
      const plusButton = item.querySelector(".plus-cart");
      const cartNum = item.querySelector(".cart-num");
      const functionPrice = parseInt(
        item.querySelector(".function-price").textContent
      );
      const mainPrice = item.querySelector("#main-price");
      const functionTax = item.querySelector(".function-tax");
      const mainTax = item.querySelector("#main-tax");

      let prevFunctionPrice = functionPrice;
      let prevQuantity = parseInt(cartNum.textContent);

      minusButton.addEventListener("click", function () {
        let num = parseInt(cartNum.textContent);
        if (num > 1) {
          num--;
          cartNum.textContent = num;
          if (num === 1) {
            minusButton.querySelector("path").setAttribute("stroke", "#C8C8C8");
          }
          updatePrices();
        }
      });

      plusButton.addEventListener("click", function () {
        let num = parseInt(cartNum.textContent);
        num++;
        cartNum.textContent = num;
        if (num > 1) {
          minusButton.querySelector("path").setAttribute("stroke", "#89ACF2");
        }
        updatePrices();
      });

      function updatePrices() {
        const quantity = parseInt(cartNum.textContent);
        const tax = Math.floor(functionPrice * 0.2); // 20% НДС

        functionTax.children[1].textContent = tax + " грн.";
        mainPrice.textContent = functionPrice * quantity + " грн.";
        mainTax.textContent = tax * quantity + " грн.";

        const priceChange =
          functionPrice * quantity - prevFunctionPrice * prevQuantity;
        updateTotalSum(priceChange);

        prevFunctionPrice = functionPrice;
        prevQuantity = quantity;
      }
    });

    // Функция для обновления общей суммы
    function updateTotalSum(change) {
      totalSum += change;
      document.getElementById("mainSumCart").textContent =
        parseFloat(totalSum).toFixed(2) + " грн.";
      document.getElementById("mainTaxDiscount").textContent =
        parseFloat(totalSum).toFixed(2) + " грн.";
      document.getElementById("mainTaxCart").textContent =
        (parseFloat(totalSum) * 0.2).toFixed(2) + " грн.";
    }
  });

  //input
  const discountInput = document.getElementById("discontCode");
  const applyDiscountButton = document.getElementById("applyDiscount");
  const clearButton = document.getElementById("clearButton");
  const mainTaxDiscount = document.getElementById("mainTaxDiscount");
  const payMainWrapper = document.querySelector(".pay-main__wrapper");
  const payMainDiscount = document.querySelector(".pay-main__discount");

  applyDiscountButton.addEventListener("click", function () {
    const inputValue = discountInput.value.trim();

    if (inputValue !== "") {
      applyDiscountButton.classList.add("applied");
      applyDiscount();

      discountInput.disabled = true; // Инпут становится неактивным
      clearButton.style.display = "none"; // Крестик исчезает
    }
  });

  discountInput.addEventListener("input", function () {
    applyDiscountButton.classList.remove("applied");

    if (discountInput.value.trim() !== "") {
      clearButton.style.display = "block"; // Появляется крестик
    } else {
      clearButton.style.display = "none"; // Крестик исчезает
    }
  });

  clearButton.addEventListener("click", function () {
    discountInput.value = "";
    clearButton.style.display = "none";
    mainTaxDiscount.textContent = mainSumCart.toFixed(2) + " грн.";
    payMainWrapper.style.display = "none"; // Скрываем блок со скидкой
  });

  function applyDiscount() {
    const mainSumCart = parseFloat(
      document.getElementById("mainSumCart").textContent
    );
    const discountedSum = mainSumCart * 0.8; // 20% скидка

    mainTaxDiscount.textContent = discountedSum.toFixed(2) + " грн.";

    const oldPrice = mainSumCart.toFixed(2) + " грн.";
    payMainDiscount.querySelector("h6").textContent = oldPrice;
    payMainWrapper.style.display = "block"; // Показываем блок со скидкой
  }

  //________________________переключение между страницами и обработка формы _______________________________

  document.addEventListener("DOMContentLoaded", function () {
    const headArticle = document.querySelector(".cart__article-subtitle_item");
    const paymentButton = document.getElementById("payment");
    const contentSection = document.querySelector(".cart__article-products");
    const formSection = document.querySelector(".form");
    const inputs = document.querySelectorAll(".form input");
    const formDone = document.getElementById("formDone");
    const formHidden = document.getElementById("hiddenPage");

    paymentButton.addEventListener("click", function (event) {
      if (
        paymentButton.querySelector("span").textContent ===
        "Оформити замовлення"
      ) {
        paymentButton.querySelector("span").textContent =
          "Підтвердити замовлення";
        formSection.style.display = "block";
        headArticle.style.display = "none";
        paymentButton.style.padding = "20px 70px";
        contentSection.style.display = "none"; // Скрыть секцию content
      } else {
        let allFieldsValid = true;
        const formData = {};

        // Новый код для проверки полей в активном контейнере
        const physContainer = document.querySelector(
          ".form__content-input__container-phys"
        );
        const legContainer = document.querySelector(
          ".form__content-input__container-leg"
        );

        const activeContainer =
          window.getComputedStyle(physContainer).display !== "none"
            ? physContainer
            : legContainer;

        if (activeContainer) {
          const inputsInActiveContainer =
            activeContainer.querySelectorAll("input[required]");

          inputsInActiveContainer.forEach((input) => {
            const inputValue = input.value.trim();

            input.addEventListener("input", function () {
              input.style.borderColor = "";
              input.style.backgroundColor = "";
              input.placeholder = "";
            });

            if (inputValue === "") {
              allFieldsValid = false;
              input.style.borderColor = "red";
              input.style.backgroundColor = "#FF00001A";
              input.placeholder = "Це поле обов'язкове";
            } else {
              input.style.borderColor = "";
              input.style.backgroundColor = "";
              input.placeholder = "";
              formData[input.name] = inputValue;

              if (input.id === "nameInput" || input.id === "lastNameInput") {
                const regex = /^[A-Za-zА-Яа-яЁё]+$/;
                if (!regex.test(inputValue)) {
                  allFieldsValid = false;
                  input.style.borderColor = "red";
                }
              } else if (input.id === "phoneInput") {
                const regex = /^\d{10}$/;
                if (!regex.test(inputValue)) {
                  allFieldsValid = false;
                  input.style.borderColor = "red";
                }
              } else if (input.id === "emailInput") {
                const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!regex.test(inputValue)) {
                  allFieldsValid = false;
                  input.style.borderColor = "red";
                }
              }
            }
          });
        }

        if (!allFieldsValid) {
          event.preventDefault();
        } else {
          console.log("Данные отправлены:", formData);
          console.log("Показываем блок formDone");
          formDone.style.display = "block";
          formHidden.style.display = "none"; // Показ блока с сообщением
        }
      }
    });
  });

  //___________________________переключение между формами____________________
  function handlePersonTypeButtonClick(
    activeButton,
    inactiveButton,
    activeContainer,
    inactiveContainer
  ) {
    activeButton.addEventListener("click", function () {
      if (window.innerWidth <= 968) {
        // Измените значение 768 на нужное вам
        activeContainer.style.display = "flex";
      } else {
        activeContainer.style.display = "grid";
      }

      inactiveContainer.style.display = "none";

      activeButton.classList.add("active-btn");
      inactiveButton.classList.remove("active-btn");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const physicalPersonButton = document.querySelector(".physical-person");
    const legalPersonButton = document.querySelector(".legal-person");
    const physContainer = document.querySelector(
      ".form__content-input__container-phys"
    );
    const legContainer = document.querySelector(
      ".form__content-input__container-leg"
    );

    handlePersonTypeButtonClick(
      physicalPersonButton,
      legalPersonButton,
      physContainer,
      legContainer
    );
    handlePersonTypeButtonClick(
      legalPersonButton,
      physicalPersonButton,
      legContainer,
      physContainer
    );

    if (window.innerWidth <= 968) {
      physContainer.style.display = "flex"; // Изменение для ширины меньше 968px
    } else {
      physContainer.style.display = "grid"; // Изменение для ширины больше 968px
    }

    physicalPersonButton.classList.add("active-btn");
  });

  //_______________________города____________
  var x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select__form");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected__form");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items__form select-hide__form");
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName(
              "same-as-selected__form"
            );
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected__form");
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
      this.nextSibling.classList.toggle("select-hide__form");
      this.classList.toggle("select-arrow-active__form");
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

  //_________________выбор города чекбокс-___________
  $(document).ready(function () {
    $(".radio-label").click(function () {
      $(".radio-label").removeClass("active");
      $(this).addClass("active");
    });

    $(".checkbox-label").click(function () {
      var checkbox = $(this).find(".hidden-checkbox");
      checkbox.prop("checked", !checkbox.prop("checked"));
    });

    $("#cityForm").submit(function () {
      var selectedCities = [];
      $(".hidden-checkbox:checked").each(function () {
        selectedCities.push($(this).val());
      });
      // Теперь массив selectedCities содержит выбранные города.
      // Можете добавить их к данным формы перед отправкой.
    });
  });

  //________________________ доставка_______________
  $(document).ready(function () {
    $(".delivery-option").click(function () {
      $(".delivery-option").removeClass("active");
      $(this).addClass("active");
    });
  });

  //_______________почта____________

  document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown-el");

    dropdowns.forEach(function (dropdown) {
      var selectedItem = dropdown.querySelector(".dropdown-item:first-child");

      changeSelected(dropdown, selectedItem);

      var dropdownHead = dropdown.querySelector(".dropdown-head");
      var dropdownBodyInner = dropdown.querySelector(".dropdown-body-inner");

      dropdownHead.addEventListener("click", function () {
        dropdown.classList.toggle("is-open");
        if (dropdown.classList.contains("is-open")) {
          dropdownBodyInner.style.display = "block";
        } else {
          dropdownBodyInner.style.display = "none";
        }
      });

      var dropdownItems = dropdown.querySelectorAll(".dropdown-item");
      dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
          dropdown.classList.remove("is-open");
          dropdownBodyInner.style.display = "none";

          changeSelected(dropdown, item);
        });
      });
    });

    function changeSelected(dropdown, selectedItem) {
      var currentSelected = dropdown.querySelector(".current-selected");
      var dpInput = dropdown.querySelector(".dp-input");
      currentSelected.textContent = selectedItem.textContent;
      dpInput.value = selectedItem.getAttribute("value");
    }
  });

  //____________________________текстовая область________________
  const textarea = document.querySelector("#autoExpandTextarea");

  textarea.addEventListener("input", function () {
    this.style.height = "auto"; // Сначала сбросить высоту до авто
    this.style.height = this.scrollHeight + "px"; // Затем установить высоту равной высоте содержимого
  });
}
