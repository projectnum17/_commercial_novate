if (document.getElementById("page20Identifier")) {
  //iframe
  function mainTogglePopup() {
    const popup = document.getElementById("main-popup");
    const overlay = document.getElementById("main-overlay");
    const videoIframe = document.getElementById("mainVideoFrame");

    if (popup.style.display === "block") {
      popup.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "auto"; // Включаем скроллинг обратно
      videoIframe.src = ""; // Останавливаем видео
    } else {
      popup.style.display = "block";
      overlay.style.display = "block";
      document.body.style.overflow = "hidden"; // Запрещаем скроллинг
      videoIframe.src = videoIframe.getAttribute("data-src"); // Загружаем видео
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".main-iframe");
    const overlay = document.getElementById("main-overlay");

    button.addEventListener("click", mainTogglePopup);
    overlay.addEventListener("click", mainTogglePopup);
  });

  //slider clients

  new Swiper(".slider-clients__main", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 5.5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },

      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5.5,
      },
    },
  });

  new Swiper(".slider-partners__main", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 5.5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },

      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5.5,
      },
    },
  });
}
