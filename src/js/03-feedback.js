import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button')


form.addEventListener('input', throttle(saveValue, 500));

object = {
    email: '',
    message: '',
}
console.log(object)

function saveValue(event) {

    object.email = emailInput.value;
    object.message = messageInput.value

    localStorage.setItem("feedback-form-state", JSON.stringify(object));
}
const currentValue = localStorage.getItem("feedback-form-state");
const parsedValue = JSON.parse(currentValue);
if (parsedValue) {
    emailInput.value = parsedValue.email;
    messageInput.value = parsedValue.message;
}

form.addEventListener('submit', onButtonClick)
function onButtonClick(event) {
    event.preventDefault()

    console.log(object)

    form.reset();
    localStorage.removeItem("feedback-form-state")
}