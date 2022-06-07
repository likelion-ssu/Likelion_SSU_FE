//이벤트 리스너 등록
init();
//이벤트 리스터 추가하는 함수
function init() {
  //form 제출
  document.querySelector("form").addEventListener("submit", addToDo);
  //Delete all
  document.getElementById("clear").addEventListener("click", clearTodoList);
  //li 태그 (TODO ITEM) 삭제& 했다고 표시 이벤트
  document.querySelector("ul").addEventListener("click", deleteOrCheck);
}

//form 제출
function addToDo(event) {
  event.preventDefault(); //기본적으로 실행하는 동작 막기
  let toDoValue = document.querySelector("input");
  if (toDoValue.value !== "") {
    addTask(toDoValue.value); // li 태그로 실제 화면에 추가
    toDoValue.value == ""; // 값 초기화 (입력창 비워주기)
  }
}

// li 태그 추가
function addTask(value) {
  let ul = document.querySelector("ul");
  console.log("hi");
  let li = document.createElement("li");
  li.innerHTML = `<input class="checkbox" type="checkbox"><label>${value}</label><span class="delete">🦁</span>`;
  ul.appendChild(li); // 자식 엘리먼트 추가
  document.querySelector(".todolist").style.display = "block";
}

//delete all 전체 삭제
function clearTodoList(event) {
  let ul = (document.querySelector("ul").innerHTML = "");
}

// 애를 삭제? 체크?
function deleteOrCheck(event) {
  if (event.target.className === "delete") {
    deleteToDo(event); //삭제 함수
  } else {
    checkToDo(event); // 체크 함수
  }
}

//삭제 함수
function deleteToDo(event) {
  let remove = event.target.parentNode; // event.target: 자식, delete
  let parent = remove.parentNode; // delete 클래스명을 가진 엘리먼트의 부모 노드
  parent.removeChild(remove);
}

//체크 함수
function checkToDo(event) {
  let todo = event.target.nextSibling;
  // 체크 박스 눌린 경우(글자 색상 변경)
  if (event.target.checked) {
    todo.style.textDecorationLine = "line-through";
  }
  // 체크 박스 안 눌린 경우
  else {
    todo.style.color = "#dfe6e9";
  }
}
