const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // page가 load되는 순간 메소드 호출(이 소스코드가 없으면 1초 후 호출)
setInterval(getClock, 1000);