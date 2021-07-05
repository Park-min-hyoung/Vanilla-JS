const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minute}:${seconds}`;
}

getClock(); // page가 load되는 순간 메소드 호출(이 소스코드가 없으면 1초 후 호출)
setInterval(getClock, 1000);