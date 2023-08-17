import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const KEYS_FORM = 'feedback-form-state';
const keyFormLocStr = JSON.parse(localStorage.getItem(KEYS_FORM));

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

if (keyFormLocStr) {
  form.email.value = keyFormLocStr.email;
  form.message.value = keyFormLocStr.message;
}

function handleInput() {
  const dataLocalStor = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(KEYS_FORM, JSON.stringify(dataLocalStor));
}
function handleSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEYS_FORM)));
  form.reset();
  localStorage.removeItem(KEYS_FORM);
}
