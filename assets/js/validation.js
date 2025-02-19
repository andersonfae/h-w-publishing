document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorPhone = document.getElementById("error-phone");

  const leadForm = document.getElementById("lead-form");
  const productPage = document.getElementById("product-page");
  const welcomeMsg = document.getElementById("welcome-msg");

  function validateName() {
      const nameValue = nameInput.value.trim();
      if (nameValue.length < 3) {
          errorName.textContent = "O nome deve ter pelo menos 3 caracteres.";
          return false;
      }
      errorName.textContent = "";
      return true;
  }

  function validateEmail() {
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(emailValue)) {
          errorEmail.textContent = "Digite um e-mail válido.";
          return false;
      }
      errorEmail.textContent = "";
      return true;
  }

  function validatePhone() {
      const phoneValue = phoneInput.value.trim();
      const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!phonePattern.test(phoneValue)) {
          errorPhone.textContent = "Digite um telefone válido no formato (99) 99999-9999.";
          return false;
      }
      errorPhone.textContent = "";
      return true;
  }

  function applyPhoneMask(value) {
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
      return value;
  }

  phoneInput.addEventListener("input", function (e) {
      e.target.value = applyPhoneMask(e.target.value);
  });

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();

      if (isNameValid && isEmailValid && isPhoneValid) {
          const userName = nameInput.value.trim();

          leadForm.classList.add("d-none");
          productPage.classList.remove("d-none");

          welcomeMsg.textContent = `Bem-vindo, ${userName}!`;

          form.reset();
      }
  });
});
