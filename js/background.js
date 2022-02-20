const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.className = "background";
// createElement: html 요소를 만들어 추가
// appendChild: 부모 태그에 요소 추가
