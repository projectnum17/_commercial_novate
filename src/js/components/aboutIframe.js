if (document.getElementById("page15Identifier")) {
  function aboutTogglePopup() {
    const popup = document.getElementById("about-popup");
    const overlay = document.getElementById("about-overlay");
    const videoIframe = document.getElementById("aboutVideoFrame");

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
    const button = document.querySelector(".production-video");
    const overlay = document.getElementById("about-overlay");

    button.addEventListener("click", aboutTogglePopup);
    overlay.addEventListener("click", aboutTogglePopup);
  });
}
