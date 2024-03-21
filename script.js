
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  if (nameInput.value === '') {
    nameError.innerText = 'Name is required';
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  if (emailInput.value === '') {
    emailError.innerText = 'Email is required';
    emailError.style.display = 'block';
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.innerText = 'Please enter a valid email address';
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  if (passwordInput.value === '') {
    passwordError.innerText = 'Password is required';
    passwordError.style.display = 'block';
    isValid = false;
  } else {
    passwordError.style.display = 'none';
  }

  return isValid;
}

function isValidEmail(email) {
  // Basic email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
