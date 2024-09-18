if (document.getElementById("page1Identifier")) {
  //first page Btn more
  document.addEventListener("DOMContentLoaded", function () {
    function showNextBlock() {
      if (currentBlockIndex < unvisibleCardsBlocks.length) {
        unvisibleCardsBlocks[currentBlockIndex].style.display = "block";
        currentBlockIndex++;

        showMoreButton.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });

        if (currentBlockIndex === unvisibleCardsBlocks.length) {
          showMoreButton.style.display = "none";
        }
      }
    }

    var showMoreButton = document.getElementById("showMoreButton");
    var unvisibleCardsBlocks = document.querySelectorAll(".unvisible-cards");
    var currentBlockIndex = 0;

    showMoreButton.addEventListener("click", showNextBlock);
  });

  //second page Btn more
  document.addEventListener("DOMContentLoaded", function () {
    function showNextBlockSecond() {
      if (currentBlockIndex < unvisibleCardsBlocks.length) {
        unvisibleCardsBlocks[currentBlockIndex].style.display = "block";
        currentBlockIndex++;

        showMoreButton.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });

        if (currentBlockIndex === unvisibleCardsBlocks.length) {
          showMoreButton.style.display = "none";
        }
      }
    }

    var showMoreButton = document.getElementById("showMoreButtonSecond");
    var unvisibleCardsBlocks = document.querySelectorAll(
      ".unvisible-cards-second"
    );
    var currentBlockIndex = 0;

    showMoreButton.addEventListener("click", showNextBlockSecond);
  });

  //third page Btn more
  document.addEventListener("DOMContentLoaded", function () {
    function showNextBlockThird() {
      if (currentBlockIndex < unvisibleCardsBlocks.length) {
        unvisibleCardsBlocks[currentBlockIndex].style.display = "block";
        currentBlockIndex++;

        showMoreButton.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });

        if (currentBlockIndex === unvisibleCardsBlocks.length) {
          showMoreButton.style.display = "none";
        }
      }
    }

    var showMoreButton = document.getElementById("showMoreButtonThird");
    var unvisibleCardsBlocks = document.querySelectorAll(
      ".unvisible-cards-third"
    );
    var currentBlockIndex = 0;

    showMoreButton.addEventListener("click", showNextBlockThird);
  });
}
