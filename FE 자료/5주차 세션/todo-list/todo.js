// 이벤트 리스너 등록 (호출)
init();

// 이벤트 리스너 추가하는 함수
function init() {
    // form 제출
    document.querySelector('form').addEventListener('submit', addToDo);
    // DELETE ALL 이벤트
    document.getElementById('clear').addEventListener('click', clearTodoList);
    // li 태그(TODO item) 삭제&했다고 표시 이벤트
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

// form 제출 
function addToDo(event) {
    // event.preventDefault : 이벤트를 명시적으로 처리하지 않은 경우, 
    // 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정

    event.preventDefault(); // 기본적으로 실행하는 동작 막기
    let toDoValue = document.querySelector('input');
    if (toDoValue !== '') {
        console.log(toDoValue.value);
        addTask(toDoValue.value); // li태그로 실제 화면에 추가 (To Do list의 값으로 value 추가)
        toDoValue.value = ''; // 값 초기화 (입력창 비워주기)
    }
}

// li 태그 추가
function addTask(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">X</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li); // 자식 엘리먼트 추가
    document.querySelector('.todolist').style.display = 'block';
}

// delete all 전체 삭제
function clearTodoList(event) {
    let ul = document.querySelector('ul').innerHTML = '';
}

// 삭제 or 체크 결정 함수
function deleteOrCheck(event) {
    if(event.target.className === 'delete') {
        deleteToDo(event); // 삭제 함수 : X 버튼 클릭 시 목록에서 항목 삭제
    }
    else {
        checkToDo(event); // 체크 함수 : 체크박스를 클릭 시 글씨 색을 연하게 변경
    }
}

// 삭제 함수
function deleteToDo(event) {
    // currentTarget : 이벤트 핸들러가 부착된 것 가리킴 - 이벤트가 부착된 부모의 위치 반환
    // event.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환

    let remove = event.target.parentNode; // event.target : 자식, delete
    let parent = remove.parentNode; // delete 클래스명을 가진 엘리먼트의 부모 노드
    parent.removeChild(remove); // 삭제할 요소의 부모로부터 removeChild
}

// 체크 함수
function checkToDo(event) {
    let todo = event.target.nextSibling; // 체크박스 옆 <label> 엘리먼트를 todo 변수에 지정

    // 체크 박스 눌린 경우 (글자 색상 변경)
    if (event.target.checked) {
        todo.style.color = '#c4c4c4';
    }
    // 체크 박스 눌리지 않은 경우
    else {
        todo.style.color = '#000000';
    }
}