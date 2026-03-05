const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));

let formData = {
  email: storageData?.email || "", 
  message: storageData?.message || "",
}

const form = document.querySelector('.feedback-form');

const formFieldEmail = form.querySelector('[name="email"]')
const formFieldMessage = form.querySelector('[name="message"]')

formFieldEmail.value = formData.email
formFieldMessage.value = formData.message


form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(formData)
  );
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formFieldEmail.value.trim() || !formFieldMessage.value.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData)

  formData = {
    email: "", 
    message: "",
  }


  formFieldEmail.value = ""
  formFieldMessage.value = ""

  localStorage.removeItem('feedback-form-state')
});

