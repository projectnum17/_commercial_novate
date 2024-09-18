if (document.getElementById("page2Identifier")) {
  (function () {
    // Проверяем, находимся ли мы на странице с элементами
    const productItemCard = document.querySelector(".product__item-card_item");
    if (productItemCard) {
      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        let slides = productItemCard.getElementsByClassName("mySlides");
        let dots = productItemCard.getElementsByClassName("demo");
        let captionText = productItemCard.querySelector(".caption");

        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        if (captionText) {
          captionText.innerHTML = dots[slideIndex - 1].alt;
        }
      }

      // Добавляем обработчики событий к картинкам
      let demoImages = productItemCard.querySelectorAll(".demo");
      demoImages.forEach((image, index) => {
        image.addEventListener("click", () => {
          currentSlide(index + 1);
        });
      });
    }
  })();

  (function () {
    const modal = document.getElementById("myModal");
    const closeButton = modal.querySelector(".close");
    const zoomIcon = document.getElementById("zoom-icon");
    const body = document.body;

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      let slides = modal.getElementsByClassName("mySlides");
      let dots = modal.getElementsByClassName("demo");
      let captionText = modal.querySelector(".caption");

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      if (captionText) {
        captionText.innerHTML = dots[slideIndex - 1].alt;
      }
    }

    zoomIcon.addEventListener("click", () => {
      modal.style.display = "flex";
      body.style.overflow = "hidden"; // Запретить прокрутку
      showSlides(slideIndex);
    });

    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
      body.style.overflow = "auto"; // Восстановить прокрутку
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        body.style.overflow = "auto"; // Восстановить прокрутку
      }
    });

    // Добавляем обработчики событий к миниатюрам
    let demoImages = modal.querySelectorAll(".demo");
    demoImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        currentSlide(index + 1);
      });
    });
  })();

  //younube btn
  function togglePopup() {
    const popup = document.getElementById("videoPopup");
    const overlay = document.getElementById("overlay");
    const videoIframe = document.getElementById("videoIframe");

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
    const button = document.getElementById("iframe-icon");
    const overlay = document.getElementById("overlay");

    button.addEventListener("click", togglePopup);
    overlay.addEventListener("click", togglePopup);
  });

  //linza

  $(".magnified").hover(
    function (e) {
      var magnifyContainer = $(".magnify"),
        magnifyContainerPosition = magnifyContainer.offset(),
        magnifyContainerHeight = magnifyContainer.height(),
        magnifyContainerWidth = magnifyContainer.width(),
        imgPosition = $(".magnified").position(),
        imgHeight = $(".magnified").height(),
        imgWidth = $(".magnified").width();

      $(".magnifier").show();

      $(this).mousemove(function (e) {
        var posX = e.pageX - magnifyContainerPosition.left, // Используем относительные координаты
          posY = e.pageY - magnifyContainerPosition.top, // Используем относительные координаты
          percX = (posX / magnifyContainerWidth) * 100,
          percY = (posY / magnifyContainerHeight) * 100,
          perc = percX + "% " + percY + "%";

        $(".magnifier").css({
          top: posY,
          left: posX,
          backgroundPosition: perc,
        });
      });
    },
    function () {
      $(".magnifier").hide();
    }
  );
}
