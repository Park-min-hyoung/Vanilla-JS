const loginForm = document.querySelector("#login-form")
const ioginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = ioginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username); // input(text)로 부터 user 정보를 받는다
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) { // localStoage에 user 정보가 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(saveUsername); // localStoage로 부터 user 정보를 받는다
}