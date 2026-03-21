const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const contactForm = document.getElementById("contactForm");

function clearFieldState(inputField, errorField) {
  inputField.classList.remove("is-valid");
  inputField.classList.remove("is-invalid");
  errorField.textContent = "";
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("regName");
  const email = document.getElementById("regEmail");
  const password = document.getElementById("regPassword");
  const confirmPassword = document.getElementById("regConfirmPassword");

  const nameError = document.getElementById("regNameError");
  const emailError = document.getElementById("regEmailError");
  const passwordError = document.getElementById("regPasswordError");
  const confirmPasswordError = document.getElementById("regConfirmPasswordError");
  const registerSuccess = document.getElementById("registerSuccess");

  clearFieldState(name, nameError);
  clearFieldState(email, emailError);
  clearFieldState(password, passwordError);
  clearFieldState(confirmPassword, confirmPasswordError);

  registerSuccess.textContent = "";
  let isFormValid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    name.classList.add("is-invalid");
    isFormValid = false;
  } else {
    name.classList.add("is-valid");
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailError.textContent = "Enter a valid email.";
    email.classList.add("is-invalid");
    isFormValid = false;
  } else {
    email.classList.add("is-valid");
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    password.classList.add("is-invalid");
    isFormValid = false;
  } else {
    password.classList.add("is-valid");
  }

  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPassword.classList.add("is-invalid");
    isFormValid = false;
  } else {
    confirmPassword.classList.add("is-valid");
  }

  if (isFormValid) {
    registerSuccess.textContent = "Registration successful.";
    registerForm.reset();
    name.classList.remove("is-valid");
    email.classList.remove("is-valid");
    password.classList.remove("is-valid");
    confirmPassword.classList.remove("is-valid");
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");
  const loginSuccess = document.getElementById("loginSuccess");

  clearFieldState(email, emailError);
  clearFieldState(password, passwordError);

  loginSuccess.textContent = "";
  let isLoginValid = true;

  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailError.textContent = "Enter a valid email.";
    email.classList.add("is-invalid");
    isLoginValid = false;
  } else {
    email.classList.add("is-valid");
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    password.classList.add("is-invalid");
    isLoginValid = false;
  } else {
    password.classList.add("is-valid");
  }

  if (isLoginValid) {
    loginSuccess.textContent = "Login successful.";
    loginForm.reset();
    email.classList.remove("is-valid");
    password.classList.remove("is-valid");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you. Your inquiry has been submitted.");
  contactForm.reset();
});
