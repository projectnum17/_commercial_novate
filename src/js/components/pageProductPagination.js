if (document.getElementById("page2Identifier")) {
  document.addEventListener("DOMContentLoaded", function () {
    const feedbackBlocks = document.querySelectorAll(
      ".pagination-page__feedback"
    );
    const pageButtons = document.querySelectorAll(".page-button");
    const prevButton = document.querySelector(".prev-page");
    const nextButton = document.querySelector(".next-page");
    let currentFeedbackIndex = 0;

    function showFeedback(index) {
      feedbackBlocks.forEach((block) => {
        block.classList.add("hidden-page");
      });
      feedbackBlocks[index].classList.remove("hidden-page");
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
}
