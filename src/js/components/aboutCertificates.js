if (document.getElementById("page15Identifier")) {
  const galleryItems = document.querySelectorAll(".certificate__gallery-item");
  const popup = document.getElementById("certificate-popup");
  const popupImage = document.querySelector(".certificate-popup__image");
  const popupOverlay = document.getElementById("certificate__popup-overlay");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      popupImage.src = imgSrc;
      popup.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  popupOverlay.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  //slider
  var swiper = null;

  function initializeSwiper() {
    if (window.innerWidth <= 768 && swiper === null) {
      swiper = new Swiper(".slider-certificate", {
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
}
