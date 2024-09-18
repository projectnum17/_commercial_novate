if (document.getElementById("page1Identifier")) {
  document.addEventListener("DOMContentLoaded", function () {
    const pageButtons = document.querySelectorAll(".page-button");
    const prevPageArrow = document.querySelector(".prev-page");
    const nextPageArrow = document.querySelector(".next-page");
    const productSections = document.querySelectorAll(".catalog__product");
    let currentPage = 1;

    pageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        currentPage = parseInt(this.dataset.page);
        updatePageVisibility();
      });
    });

    prevPageArrow.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        updatePageVisibility();
      }
    });

    nextPageArrow.addEventListener("click", function () {
      if (currentPage < pageButtons.length) {
        currentPage++;
        updatePageVisibility();
      }
    });

    function updatePageVisibility() {
      productSections.forEach((section) => {
        const pageNumber = parseInt(section.dataset.page);
        if (pageNumber === currentPage) {
          section.classList.add("current-page");
        } else {
          section.classList.remove("current-page");
        }
      });

      pageButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      pageButtons[currentPage - 1].classList.add("active");
    }
  });
}
