init();

//이벤트 리스너 추가
function init() {
  //form 제출
  document.querySelector("form").addEventListener("submit", addToDo);
  //delete all 이벤트
  document.getElementById("clear").addEventListener("click", clearToDoList);
  //삭제또는 했음 추가(li태그 -> todo item 삭제/했음)
  document.querySelector("ul").addEventListener("click", deleteOrCheck);
}

//폼 제출
function addToDo(event) {
  event.preventDefault(); //기본실행동작 막기
  let toDoValue = document.querySelector("input");
  if (toDoValue.value !== "") {
    addTask(toDoValue.value); //li태그로 실제 화면에 추가하기
    toDoValue.value = ""; //초기화
  }
}

//li태그 추가
function addTask(value) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `<span class="delete">💀</span><input type="checkbox" id="${value}"><label for="${value}">${value}</label>`;
  ul.appendChild(li); //자식 element 추가
  document.querySelector(".todolist").style.display = "block";
}

//delete all elements
function clearToDoList(event) {
  let ul = (document.querySelector("ul").innerHTML = ``);
}

//delete or check
function deleteOrCheck(event) {
  if (event.target.className === "delete") {
    deleteToDo(event); //삭제 함수
  } else {
    checkToDo(event); //체크 함수
  }
}

function deleteToDo(event) {
  let remove = event.target.parentNode; //event.target은 자식. parentNode하면 그놈
  let parent = remove.parentNode; //delete 클래스명을 가진 엘리먼트의 부모 노드
  parent.removeChild(remove);
}

function checkToDo(event) {
  let todo = event.target.nextSibling;
  //체크박스가 눌린 경우 글자 색을 변경할 것임
  if (event.target.checked) {
    todo.style.color = "#c4c4c4";
  }
  //체크박스가 안눌린 경우
  else {
    todo.style.color = "#000000";
  }
}
