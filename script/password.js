const handlePassword = function() {
  const text = document.querySelector('.js-password-input');
  const box = document.querySelector('.js-password-toggle');
  box.addEventListener('change', function() {
    if (text.type === 'text') {
      text.type = 'password';
    } else {
      text.type = 'text';
    }
  });
};

const init = function() {
  handlePassword();
};

document.addEventListener('DOMContentLoaded', init);
