const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// toDos를 빈 array로 설정하다보니 매 js 실행마다 빈 array로 초기화됨
// const가 아니라 let으로 선언 후 변경사항을 적용시켜줄 필요!

function saveToDos() {
    // localStorage는 string만을 저장할 수 있음
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // JSON.stringify -> 단순 string으로 바꿔줌

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // li.id는 string타입, toDo.id는 number 타입
    saveToDos();
}

function paintToDo(newTodo /*text가 아닌 Object를 받음*/) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { // todo들끼리의 중복허용을 위해 id 추가
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj)
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this  is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //JavaScript는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
    //forEach함수를 이용하면 되는데, 이 함수는 array 안의 각 요소에 대한 정보를 인자로 자동으로 전달해준다.
    //parsedToDos.forEach(sayHello);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() { // array의 item을 유지하고 싶으면 true를 리턴해야함.
    return 
}

// 지우고 싶은 item을 제외하고 새 array를 만든다 -> filter
 