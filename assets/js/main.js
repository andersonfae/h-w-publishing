document.addEventListener("DOMContentLoaded", function () {
  const leadForm = document.getElementById("lead-form");
  const productPage = document.getElementById("product-page");

  productPage.style.display = "none";
  leadForm.style.display = "block";

  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const welcomeMsg = document.getElementById("welcome-msg");

  function validateForm() {
      if (nameInput.value.trim().length < 3) return false;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(emailInput.value.trim())) return false;
      const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!phonePattern.test(phoneInput.value.trim())) return false;
      return true;
  }

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (validateForm()) {
          const userName = nameInput.value.trim();

          leadForm.style.display = "none";
          productPage.style.display = "block";

          welcomeMsg.textContent = `Bem-vindo, ${userName}!`;

          form.reset();
      } else {
          alert("Por favor, preencha todos os campos corretamente.");
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  function startCountdown(targetDate) {
      function updateCountdown() {
          const now = new Date().getTime();
          const distance = targetDate - now;

          if (distance <= 0) {
              document.getElementById("countdown").innerHTML = "Promoção Expirada!";
              clearInterval(interval);
              return;
          }

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById("days").textContent = days.toString().padStart(2, "0");
          document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
          document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
          document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
      }

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
  }

  const promotionEndDate = new Date(2025, 1, 28, 23, 59, 59).getTime();
  startCountdown(promotionEndDate);
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.querySelector(".nav-links");

    hamburgerBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
