/*
if (document.getElementById("page2Identifier")) {
  let isModalOpen = false;

  const degIcon = document.getElementById("deg-icon");
  const circleModal = document.getElementById("circle-modal");
  const body = document.body;

  degIcon.addEventListener("click", () => {
    circleModal.style.display = "flex";
    body.style.overflow = "hidden";
    isModalOpen = true;
  });

  const closeCircle = document.getElementById("close-circle");

  closeCircle.addEventListener("click", () => {
    circleModal.style.display = "none";
    body.style.overflow = "auto";
    isModalOpen = false;

    isPlaying = false;
    clearInterval(playInterval);
    isPlaying = false;
    playButton.style.display = "block";
    stopButton.style.display = "none";
    currentFrame = 0;

    // Скрыть все изображения, кроме первого
    images.forEach((image, index) => {
      if (index === currentFrame) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });

  const imageContainer = document.getElementById("image-container");
  const rotateButton = document.getElementById("next-btn");

  const prevButton = document.getElementById("prev-btn");

  prevButton.addEventListener("click", () => {
    if (isRotating) return;
    rotate(1); // Вращать назад
  });

  const playButton = document.getElementById("play-btn");
  const stopButton = document.getElementById("stop-btn");

  playButton.addEventListener("click", () => {
    if (!isModalOpen) {
      return; // Выход из функции, если модальное окно закрыто
    }

    if (isPlaying) {
      clearInterval(playInterval); // Остановка анимации
      playButton.style.display = "block";
      stopButton.style.display = "none";
    } else {
      playInterval = setInterval(() => {
        rotate(-1); // Вращать вперед
      }, 5000 / frameCount); // Время между кадрами, чтобы завершить анимацию за 5 секунд
      playButton.style.display = "none";
      stopButton.style.display = "block";
    }

    isPlaying = !isPlaying;
  });

  stopButton.addEventListener("click", () => {
    clearInterval(playInterval); // Остановка анимации
    isPlaying = false;
    playButton.style.display = "block";
    stopButton.style.display = "none";
  });

  let currentFrame = 0;
  let isRotating = false;
  let isPlaying = false;
  let playInterval;

  const images = Array.from(imageContainer.getElementsByTagName("img"));
  images.forEach((image) => {
    image.addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        isMousePressed = true;
        initialMouseX = event.clientX;
        event.preventDefault(); // Предотвращаем перетаскивание элемента
      }
    });
  });

  const frameCount = images.length;

  rotateButton.addEventListener("click", () => {
    if (isRotating) return;
    rotate(-1);
  });

  function rotate(direction) {
    if (isRotating) return;

    const newFrame = (currentFrame + direction + frameCount) % frameCount;
    if (newFrame < 0) {
      currentFrame = frameCount - 1;
    } else {
      currentFrame = newFrame;
    }

    isRotating = true;
    const angle = (360 / frameCount) * currentFrame * -1;

    images.forEach((image, index) => {
      if (index === currentFrame) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });

    setTimeout(() => {
      imageContainer.classList.remove("rotating");
      isRotating = false;
    }, 10);
  }

  let isMousePressed = false;
  let initialMouseX = 0;

  imageContainer.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      isMousePressed = true;
      initialMouseX = event.clientX;
    }
  });

  document.addEventListener("mousemove", (event) => {
    if (isMousePressed) {
      const mouseX = event.clientX;
      const deltaX = mouseX - initialMouseX;
      if (deltaX > 10) {
        rotate(-1); // Вращать вправо
        initialMouseX = mouseX;
      } else if (deltaX < -10) {
        rotate(1); // Вращать влево
        initialMouseX = mouseX;
      }
    }
  });

  document.addEventListener("mouseup", () => {
    isMousePressed = false;
  });


}

*/

if (document.getElementById("page2Identifier")) {
  let isModalOpen = false;

  const degIcon = document.getElementById("deg-icon");
  const circleModal = document.getElementById("circle-modal");
  const body = document.body;

  degIcon.addEventListener("click", () => {
    circleModal.style.display = "flex";
    body.style.overflow = "hidden";
    isModalOpen = true;
  });

  const closeCircle = document.getElementById("close-circle");

  closeCircle.addEventListener("click", () => {
    circleModal.style.display = "none";
    body.style.overflow = "auto";
    isModalOpen = false;

    isPlaying = false;
    clearInterval(playInterval);
    isPlaying = false;
    playButton.style.display = "block";
    stopButton.style.display = "none";
    currentFrame = 0;

    images.forEach((image, index) => {
      if (index === currentFrame) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  });

  const imageContainer = document.getElementById("image-container");
  const rotateButton = document.getElementById("next-btn");

  const prevButton = document.getElementById("prev-btn");

  prevButton.addEventListener("click", () => {
    if (isRotating) return;
    rotate(1);
  });

  const playButton = document.getElementById("play-btn");
  const stopButton = document.getElementById("stop-btn");

  playButton.addEventListener("click", () => {
    if (!isModalOpen) {
      return;
    }

    if (isPlaying) {
      clearInterval(playInterval);
      playButton.style.display = "block";
      stopButton.style.display = "none";
    } else {
      playInterval = setInterval(() => {
        rotate(-1);
      }, 5000 / frameCount);
      playButton.style.display = "none";
      stopButton.style.display = "block";
    }

    isPlaying = !isPlaying;
  });

  stopButton.addEventListener("click", () => {
    clearInterval(playInterval);
    isPlaying = false;
    playButton.style.display = "block";
    stopButton.style.display = "none";
  });

  let currentFrame = 0;
  let isRotating = false;
  let isPlaying = false;
  let playInterval;
  let isTouching = false;
  let touchStartX = 0;
  let isMousePressed = false;
  let initialMouseX = 0;

  const images = Array.from(imageContainer.getElementsByTagName("img"));
  images.forEach((image) => {
    image.addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        isMousePressed = true;
        initialMouseX = event.clientX;
        event.preventDefault();
      }
    });

    image.addEventListener("touchstart", (event) => {
      isTouching = true;
      touchStartX = event.touches[0].clientX;
      event.preventDefault();
    });

    image.addEventListener("touchmove", (event) => {
      if (isTouching) {
        const touchX = event.touches[0].clientX;
        const deltaX = touchX - touchStartX;
        if (deltaX > 10) {
          rotate(-1);
          touchStartX = touchX;
        } else if (deltaX < -10) {
          rotate(1);
          touchStartX = touchX;
        }
      }
    });

    image.addEventListener("touchend", () => {
      isTouching = false;
    });
  });

  const frameCount = images.length;

  rotateButton.addEventListener("click", () => {
    if (isRotating) return;
    rotate(-1);
  });

  function rotate(direction) {
    if (isRotating) return;

    const newFrame = (currentFrame + direction + frameCount) % frameCount;
    if (newFrame < 0) {
      currentFrame = frameCount - 1;
    } else {
      currentFrame = newFrame;
    }

    isRotating = true;
    const angle = (360 / frameCount) * currentFrame * -1;

    images.forEach((image, index) => {
      if (index === currentFrame) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });

    setTimeout(() => {
      imageContainer.classList.remove("rotating");
      isRotating = false;
    }, 10);
  }

  imageContainer.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      isMousePressed = true;
      initialMouseX = event.clientX;
    }
  });

  document.addEventListener("mousemove", (event) => {
    if (isMousePressed) {
      const mouseX = event.clientX;
      const deltaX = mouseX - initialMouseX;
      if (deltaX > 10) {
        rotate(-1);
        initialMouseX = mouseX;
      } else if (deltaX < -10) {
        rotate(1);
        initialMouseX = mouseX;
      }
    }
  });

  document.addEventListener("mouseup", () => {
    isMousePressed = false;
  });
}
