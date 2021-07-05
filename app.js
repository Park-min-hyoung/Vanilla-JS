const ioginInput = document.querySelector("#login-form input");
const ioginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = ioginInput.value;
    console.log(username);
}

ioginButton.addEventListener("click", onLoginBtnClick);