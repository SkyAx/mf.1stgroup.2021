let myEmail = 'gmail.com';
let myPassword = 'pwd123';

let emailErrorMessage = 'Введите e-mail';
let passwordErrorMessage = 'Введите пароль';
let credsErrorMessage = 'Невереные учетные данные';
let successFormMessage = 'Вы будете автоматически перенаправлены на страницу через 3 сек.';

document.getElementById('login-button').addEventListener('click', function(evt) {
  evt.preventDefault();

  let emailValue = document.getElementById('login-email').value;

  if (!emailValue) {
    addFormPopup(emailErrorMessage);
  }

  let passwordValue = document.getElementById('login-password').value;

  if (!passwordValue) {
    addFormPopup(passwordErrorMessage);
  }

  if (emailValue === myEmail && passwordValue === myPassword) {
    addFormPopup(successFormMessage, 'success');
  } else {
    addFormPopup(credsErrorMessage);
  }
});

function addFormPopup(innerText, type = 'error') {
  let popup = document.createElement('div');
  let loginForm = document.getElementsByClassName('login-form')[0];

  popup.classList.add('ui');
  popup.classList.add('message');

  if (type === 'error') {
    popup.classList.add('error');
    loginForm.classList.add('error');
  } else if (type === 'success') {
    popup.classList.add('success');
    loginForm.classList.add('success');
  }

  popup.innerHTML = innerText;

  loginForm.append(popup);
}
