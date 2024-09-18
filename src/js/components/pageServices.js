if (document.getElementById("page14Identifier")) {
  function setupPopup() {
    const popupOverlay = document.getElementById("schemePopupOverlay");
    const popupImage = document.getElementById("schemePopupImage");
    const closePopup = document.getElementById("schemeClosePopup");
    const body = document.body;
    const popupTriggerElements = document.querySelectorAll(".popup-scheme");

    function disableScroll() {
      body.style.overflow = "hidden";
    }

    function enableScroll() {
      body.style.overflow = "auto";
    }

    function openPopup(imageSrc) {
      popupImage.setAttribute("src", imageSrc);
      popupOverlay.style.display = "block";
      disableScroll();
    }

    function closePopupHandler() {
      popupOverlay.style.display = "none";
      enableScroll();
    }

    closePopup.addEventListener("click", closePopupHandler);

    function checkScreenWidth() {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        popupTriggerElements.forEach((triggerElement) => {
          triggerElement.addEventListener("click", () => {
            const imageSrc = triggerElement
              .querySelector("img")
              .getAttribute("src");
            openPopup(imageSrc);
          });
        });
      } else {
        popupTriggerElements.forEach((triggerElement) => {
          triggerElement.removeEventListener("click", () => {});
        });
        closePopupHandler();
      }
    }

    window.addEventListener("load", checkScreenWidth);
    window.addEventListener("resize", checkScreenWidth);
  }

  setupPopup();

  //Slider Clients

  var swiper = null;

  function initializeSwiper() {
    if (window.innerWidth <= 768 && swiper === null) {
      swiper = new Swiper(".services__image-slider", {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else if (window.innerWidth > 768 && swiper !== null) {
      swiper.destroy();
      swiper = null;
    }
  }

  // Инициализация Swiper при загрузке страницы
  document.addEventListener("DOMContentLoaded", function () {
    initializeSwiper();
  });

  // Обработчик для изменения размеров окна
  window.addEventListener("resize", function () {
    initializeSwiper();
  });

  /*     let question = document.querySelectorAll(".question");

    question.forEach((question) => {
      question.addEventListener("click", (event) => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
          active.classList.toggle("active");
          active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      });
    }); */

  let questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", (event) => {
      const answer = question.nextElementSibling;

      if (question.classList.contains("active")) {
        question.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}
