const loginForm = document.querySelector("#login-form")
const ioginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(ioginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);