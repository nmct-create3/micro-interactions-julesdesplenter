let email = {},
  password = {},
  signInButtton;

const isValidPassword = function(a) {
  if (a.length < 8) {
    return true;
  } else {
    return false;
  }
};

const addError = function(a) {
  a.field.classList.add('has-error');
};

const removeError = function(a) {
  a.field.classList.remove('has-error');
};

const isValidEmailAddress = function(emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const enableListeners = function() {
  email.input.addEventListener('blur', function(e) {
    if (isEmpty(e.target.value)) {
      addError(email);
      email.errormessage.innerHTML = 'this field is required';
    } else if (!isValidEmailAddress(e.target.value)) {
      addError(email);
      email.errormessage.innerHTML = 'the e-mail is wrong';
    } else {
      removeError(email);
    }
  });
  password.input.addEventListener('blur', function(e) {
    if (isEmpty(e.target.value)) {
      addError(password);
      password.errormessage.innerHTML = 'this field is required';
    } else if (isValidPassword(e.target.value)) {
      addError(password);
      password.errormessage.innerHTML = 'this password is wrong';
    } else {
      removeError(password);
    }
  });
  signInButtton.addEventListener('click', function(event) {
    e.preventDefault();
    console.log('click');
  });
};

const getDom = function() {
  email.field = document.querySelector('.js-username-field');
  email.input = document.querySelector('.js-username-input');
  email.errormessage = document.querySelector('.js-username-error-message');
  password.field = document.querySelector('.js-password-field');
  password.input = document.querySelector('.js-password-input');
  password.errormessage = document.querySelector('.js-password-error-message');
  signInButtton = document.querySelector('.js-sign-in-button');
  console.log(email, password, signInButtton);
};

document.addEventListener('DOMContentLoaded', function() {
  //   console.info('feest 🍕');
  getDom();
  enableListeners();
});
