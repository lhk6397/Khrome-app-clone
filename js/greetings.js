const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userGreeting = document.querySelector(".user_greeting");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.style.display = "none";
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  userGreeting.style.display = "flex";
  document.querySelector(".todo").style.display = "flex";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// localStorage를 통해 새로고침해도 정보 유지 가능
if (savedUsername === null) {
  // show the form
  loginForm.style.display = "flex";
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
