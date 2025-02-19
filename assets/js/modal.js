document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-image");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.querySelector(".close-modal");
  const prevBtn = document.getElementById("prev-img");
  const nextBtn = document.getElementById("next-img");

  let currentIndex = 0;

  function showImage(index) {
      if (index >= 0 && index < images.length) {
          modalImg.src = images[index].getAttribute("data-src");
          currentIndex = index;
      }
  }

  images.forEach((img, index) => {
      img.addEventListener("click", function () {
          modal.style.display = "flex";
          showImage(index);
      });
  });

  closeModal.addEventListener("click", function () {
      modal.style.display = "none";
  });

  prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
          showImage(currentIndex - 1);
      }
  });

  nextBtn.addEventListener("click", function () {
      if (currentIndex < images.length - 1) {
          showImage(currentIndex + 1);
      }
  });

  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});
