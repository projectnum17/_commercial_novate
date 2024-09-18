if (document.getElementById("page6Identifier")) {
  //фильтры

  document.addEventListener("DOMContentLoaded", function () {
    const feedbackBlocks = document.querySelectorAll(".blog__item-pagination ");
    const pageButtons = document.querySelectorAll(".page-button");
    const prevButton = document.querySelector(".prev-page");
    const nextButton = document.querySelector(".next-page");
    let currentFeedbackIndex = 0;

    function showFeedback(index) {
      feedbackBlocks.forEach((block) => {
        block.classList.add("unvisible-blog");
      });
      feedbackBlocks[index].classList.remove("unvisible-blog");
    }

    function updateButtonsState() {
      pageButtons.forEach((button) => {
        button.classList.remove("active");
      });
      pageButtons[currentFeedbackIndex].classList.add("active");
    }

    function goToFeedback(index) {
      if (index >= 0 && index < feedbackBlocks.length) {
        currentFeedbackIndex = index;
        showFeedback(currentFeedbackIndex);
        updateButtonsState();
      }
    }

    prevButton.addEventListener("click", function () {
      goToFeedback(currentFeedbackIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      goToFeedback(currentFeedbackIndex + 1);
    });

    pageButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        goToFeedback(index);
      });
    });

    showFeedback(currentFeedbackIndex);
    updateButtonsState();
  });

  $(document).ready(function () {
    // При загрузке страницы
    $(".filters-item").removeClass("active");
    $(".all-filters").addClass("active");
    $(".blog__main-content__category-gallery").hide();
    $(".all-category").show();

    // При клике на элемент фильтра
    $(".filters-item").click(function () {
      var category = $(this).data("category");

      // Скрыть все блоки категорий
      $(".blog__main-content__category-gallery").removeClass("active").hide();

      // Показать только блок выбранной категории и добавить класс active
      $("." + category + "-category")
        .addClass("active")
        .show();

      // Убрать класс active у всех кнопок категорий и добавить его только на выбранную кнопку
      $(".filters-item").removeClass("active");
      $(this).addClass("active");
    });

    // При клике на кнопку "Скинути фільтр"
    $(".skip-article").click(function () {
      // Скрыть все блоки категорий
      $(".blog__main-content__category-gallery").removeClass("active").hide();

      // Показать блок "all-category" и добавить класс active
      $(".all-filters").addClass("active").show();

      // Убрать класс active у всех кнопок категорий
      $(".filters-item").removeClass("active");
    });
  });

  /* $(document).ready(function () {
    $(".dropdown-toggle").click(function () {
      $(".dropdown-menu").toggleClass("show");
    });

    $(".filters-item").click(function () {
      var category = $(this).data("category");
      var text = $(this).text();
      var backgroundColor, textColor;

      switch (category) {
        case "home":
          backgroundColor = "#54bf3c";
          textColor = "#fff";
          break;
        case "work":
          backgroundColor = "#89acf2";
          textColor = "#fff";
          break;
        case "advice":
          backgroundColor = "#feb92f";
          textColor = "#fff";
          break;
        case "instruction":
          backgroundColor = "chocolate";
          textColor = "#fff";
          break;
        default:
          backgroundColor = "";
          textColor = "";
      }

      $(".dropdown-toggle").text(text);
      $(".dropdown-toggle").css("background-color", backgroundColor);
      $(".dropdown-toggle").css("color", textColor);

      $(".filters-item").not(this).removeClass("active"); // Убираем active у всех filters-item, кроме текущего
      $(this).addClass("active");

      $(".dropdown-menu").removeClass("show");
    });

    // При клике на кнопку "Скинути фільтр"
    $(".skip-article").click(function () {
      // Сброс всех классов active у элементов
      $(".filters-item").removeClass("active");

      // Скрытие выпадающего меню
      $(".dropdown-menu").removeClass("show");

      // Возврат текста кнопки к изначальному состоянию
      $(".dropdown-toggle").text("Вибрати");
      $(".dropdown-toggle").css("background-color", "");
      $(".dropdown-toggle").css("color", "");
    });
  }); */

  /*  $(document).ready(function () {
    $(".dropdown-toggle").click(function () {
      $(".dropdown-menu").toggleClass("show");
    });

    $(".filters-item").click(function () {
      var category = $(this).data("category");
      var text = $(this).text();
      var backgroundColor, textColor;

      switch (category) {
        case "home":
          backgroundColor = "#54bf3c";
          textColor = "#fff";
          break;
        case "work":
          backgroundColor = "#89acf2";
          textColor = "#fff";
          break;
        case "advice":
          backgroundColor = "#feb92f";
          textColor = "#fff";
          break;
        case "instruction":
          backgroundColor = "chocolate";
          textColor = "#fff";
          break;
        default:
          backgroundColor = "";
          textColor = "";
      }

      $(".dropdown-toggle .button-text").text(text); // Обновляем только текст
      $(".dropdown-toggle").css("background-color", backgroundColor);
      $(".dropdown-toggle").css("color", textColor);

      $(".filters-item").not(this).removeClass("active"); // Убираем active у всех filters-item, кроме текущего
      $(this).addClass("active");

      $(".dropdown-menu").removeClass("show");
    });

    // При клике на кнопку "Скинути фільтр"
    $(".skip-article").click(function () {
      // Сброс всех классов active у элементов
      $(".filters-item").removeClass("active");

      // Скрытие выпадающего меню
      $(".dropdown-menu").removeClass("show");

      // Возврат текста кнопки к изначальному состоянию
      $(".dropdown-toggle .button-text").text("Вибрати");
      $(".dropdown-toggle").css("background-color", "");
      $(".dropdown-toggle").css("color", "");
    });
  }); */

  $(document).ready(function () {
    $(".dropdown-toggle").click(function () {
      $(".dropdown-menu").toggleClass("show");
    });

    $(".filters-item").click(function () {
      var category = $(this).data("category");
      var text = $(this).text();
      var backgroundColor;

      switch (category) {
        case "home":
          backgroundColor = "#54bf3c";
          break;
        case "work":
          backgroundColor = "#89acf2";
          break;
        case "advice":
          backgroundColor = "#feb92f";
          break;
        case "instruction":
          backgroundColor = "chocolate";
          break;
        default:
          backgroundColor = "";
      }

      $(".dropdown-toggle .button-text").text(text); // Обновляем только текст
      $(".dropdown-toggle").css("background-color", backgroundColor);

      // Добавляем/удаляем класс active у .dropdown-toggle в зависимости от выбранной категории
      $(".dropdown-toggle").toggleClass("active", category !== "");
      $(".icon-container svg").css(
        "stroke",
        category !== "" ? "white" : "#A0A0A0"
      ); // Изменяем цвет иконки

      $(".filters-item").not(this).removeClass("active");
      $(this).addClass("active");

      $(".dropdown-menu").removeClass("show");
    });

    // При клике на кнопку "Скинути фільтр"
    $(".skip-article").click(function () {
      $(".filters-item").removeClass("active");

      $(".dropdown-menu").removeClass("show");

      $(".dropdown-toggle .button-text").text("Вибрати");
      $(".dropdown-toggle").css("background-color", "");
      $(".dropdown-toggle").removeClass("active");
      $(".icon-container svg").css("stroke", "#A0A0A0"); // Возвращаем цвет иконки к исходному
    });
  });
}
