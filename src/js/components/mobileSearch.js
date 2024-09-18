if (!document.getElementById("page3Identifier")) {
  var searchWrapper = document.querySelector(
    ".header-search-wrapper .search-main"
  );
  var searchFormMain = document.querySelector(".search-form-main");
  var searchField = document.querySelector(".search-form-main .search-field");

  searchWrapper.addEventListener("click", function (event) {
    event.stopPropagation(); // Остановить всплытие события, чтобы не закрывалось сразу же
    searchFormMain.classList.toggle("active-search");
    searchField.focus();
  });

  // Глобальный обработчик события клика
  document.addEventListener("click", function (event) {
    var targetElement = event.target;

    // Проверяем, был ли клик вне элементов поиска
    if (
      !searchWrapper.contains(targetElement) &&
      !searchFormMain.contains(targetElement)
    ) {
      searchFormMain.classList.remove("active-search");
    }
  });
}
