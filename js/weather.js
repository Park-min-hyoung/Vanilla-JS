const API_KEY = "01ac6c859ac46e5c141e8f2d0f983ccd"

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
     // fetch로 js 측에서 url을 부른다, respons.json 으로 url로 보이는 정보를 불러온다
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child"); // 날씨
            const city = document.querySelector("#weather span:last-child"); // 도시
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 여기서도 많은 정보를 메소드에게 준다