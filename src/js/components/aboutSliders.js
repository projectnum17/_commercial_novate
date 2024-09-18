if (document.getElementById("page15Identifier")) {
  new Swiper(".slider-clients", {
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

  new Swiper(".slider-partners", {
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
