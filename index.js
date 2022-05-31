const form  = document.querySelector('form');

const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');

const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error');

const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span.error');

const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + span.error');

const confirmPassword = document.querySelector('#password-confirm');
const confirmPasswordError = document.querySelector('#password-confirm + span.error');

function emailShowError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  }

  emailError.className = 'error active';
}

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    emailShowError();
  }
});

function countryShowError() {
  if (country.validity.patternMismatch) {
    countryError.textContent = 'Only alphabet characters allowed';
  }

  countryError.className = 'error active';
}

country.addEventListener('input', () => {
  if (country.validity.valid) {
    countryError.textContent = '';
    countryError.className = 'error';
  } else {
    countryShowError();
  }
});

function zipShowError() {
  if (zip.validity.patternMismatch) {
    zipError.textContent = 'Introduce 5 digits at the start, followed by 4 optional digits';
  }

  zipError.className = 'error active';
}

zip.addEventListener('input', () => {
  if (zip.validity.valid) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    zipShowError();
  }
});

function passwordShowError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = 'Enter a password';
  } else if (password.validity.patternMismatch) {
    passwordError.textContent = 'Password must contain a minimum of eight characters, at least one letter, one number and one special character:';
  }
  
  passwordError.className = 'error active';
}

password.addEventListener('input', () => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    passwordShowError();
  }
});

function confirmPasswordShowError() {
  if (!(password.value === confirmPassword.value)) {
    confirmPasswordError.textContent = 'Passwords don\'t match'
  }

  confirmPasswordError.className = 'error active';
}

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.validity.valid) {
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'error';
  } else {
    confirmPasswordShowError();
  }
});

const button = document.querySelector('button');
const result = document.querySelector('.result');
button.addEventListener('click', (event) => {
  if (!form.checkValidity()) {
    result.textContent = 'No';

  } else {
    result.textContent = 'Form submitted. Celebration!';
  }
});
