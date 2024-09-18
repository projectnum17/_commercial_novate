if (!document.getElementById("page3Identifier")) {
  var cartCountItems = document.querySelectorAll(".cart-count__item");
  var countItemElements = document.querySelectorAll(".count-item");
  var minusIconContainers = document.querySelectorAll(".cart-count__minus");
  var plusIconContainers = document.querySelectorAll(".cart-count__plus");
  var addToCartButtons = document.querySelectorAll(".addToCartButton");
  var countHeaderElement = document.querySelector(".count");

  var itemCounts = Array.from({ length: cartCountItems.length }, () => 0);
  var addedToCarts = Array.from(
    { length: addToCartButtons.length },
    () => false
  );

  addToCartButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      if (!addedToCarts[index]) {
        cartCountItems[index].style.display = "flex";
        addedToCarts[index] = true;

        button.querySelector(".text").textContent = "Прилад у кошику";
        button.classList.add("clicked");
        button.querySelector(".icon").style.display = "inline";
        button.disabled = true;

        itemCounts[index]++;
        updateCounters(index);
      }

      let tooltipDelete = cartCountItems[index].querySelector(
        ".tooltip-text__delete"
      );
      if (tooltipDelete) {
        tooltipDelete.style.display = "none";
      }
    });

    plusIconContainers[index].addEventListener("click", function () {
      itemCounts[index]++;
      updateCounters(index);
    });

    minusIconContainers[index].addEventListener("click", function () {
      if (itemCounts[index] > 1) {
        itemCounts[index]--;
        updateCounters(index);
      } else if (itemCounts[index] === 1) {
        itemCounts[index]--;
        updateCounters(index);
        cartCountItems[index].style.display = "none";
        addedToCarts[index] = false;

        button.querySelector(".text").textContent = "Додати у кошик";
        button.classList.remove("clicked");
        button.querySelector(".icon").style.display = "none";
        button.disabled = false;
      }
    });

    // Добавлено отображение tooltip при наведении
    cartCountItems.forEach(function (cartCountItem, index) {
      let minusIconContainer =
        cartCountItem.querySelector(".cart-count__minus");
      let tooltipDelete = cartCountItem.querySelector(".tooltip-text__delete");

      minusIconContainer.addEventListener("mouseover", function () {
        if (tooltipDelete) {
          tooltipDelete.style.display = "block";
        }
      });

      minusIconContainer.addEventListener("mouseout", function () {
        if (tooltipDelete) {
          tooltipDelete.style.display = "none";
        }
      });
    });

    cartCountItems.forEach(function (cartCountItem, index) {
      let plusIconContainer = cartCountItem.querySelector(".cart-count__plus");
      let tooltipPlus = cartCountItem.querySelector(".tooltip-text__plus");

      plusIconContainer.addEventListener("mouseover", function () {
        if (tooltipPlus) {
          tooltipPlus.style.display = "block";
        }
      });

      plusIconContainer.addEventListener("mouseout", function () {
        if (tooltipPlus) {
          tooltipPlus.style.display = "none";
        }
      });
    });
  });

  function updateCounters(index) {
    countItemElements[index].textContent = itemCounts[index];
    countHeaderElement.textContent = itemCounts.reduce(
      (sum, count) => sum + count,
      0
    );

    if (itemCounts[index] > 1) {
      minusIconContainers[index].innerHTML =
        '<img src="./img/minus-count.svg" alt="Minus">';
    } else {
      minusIconContainers[index].innerHTML =
        '<img src="./img/minus-icon.svg" alt="Minus">';
    }
  }
}
