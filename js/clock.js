const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval(함수, t) : 매번 일어나야 하는 무언가
// setTimeout(함수, t) : t밀리초 기다렸다가 실행
// padStart(a, "b"): string의 길이를 a로 만드는데 길이가 a가 아니라면 "b"라는 문자를 추가
