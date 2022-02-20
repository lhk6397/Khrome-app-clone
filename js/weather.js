const API_KEY = "1097de6421e4d2b35d53a0ddc68cb94f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = `Your City: ${data.name}`;
      weather.innerText = `Weather: ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition은 2개의 인자를 필요로 함: (잘 됐을 때 실행할 함수, 에러가 났을 때 실행할 함수)
