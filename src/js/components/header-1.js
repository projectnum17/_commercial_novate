if (document.getElementById("page3Identifier")) {
  function newMobileModal() {
    const newModal = document.querySelector(".mobile__phone-modal");
    newModal.classList.toggle("show");

    const body = document.body;
    if (newModal.classList.contains("show")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  function setupMobileModal() {
    const phoneIcon = document.querySelector(".mobile-phone a");
    phoneIcon.addEventListener("click", newMobileModal);

    const closeIcon = document.querySelector(
      ".mobile__phone-modal__content-close"
    );
    closeIcon.addEventListener("click", newMobileModal);
  }
  document.addEventListener("DOMContentLoaded", setupMobileModal);
}
