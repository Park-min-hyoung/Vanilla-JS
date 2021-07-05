const images = ["손흥민.png", "손예진.jpg", "호랑이.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // html element 생성(html에 직접 작성하는 것이 아니라 js가 만들어 주는 것)

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage); // document의 body 밑에 js에서 생성한 element를 추가