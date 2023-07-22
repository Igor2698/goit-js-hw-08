import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button')


form.addEventListener('input', throttle(saveValue, 500));



function saveValue(event) {

    const object = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(object));
}
const currentValue = localStorage.getItem("feedback-form-state");
const parsedValue = JSON.parse(currentValue);
if (parsedValue) {
    emailInput.value = parsedValue.email;
    messageInput.value = parsedValue.message;
}


button.addEventListener('click', onButtonClick)
function onButtonClick(event) {
    console.log(localStorage.getItem("feedback-form-state"))
    event.preventDefault()
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem("feedback-form-state")
}