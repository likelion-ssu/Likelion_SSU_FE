init();
//이벤트 리스너 추가하는 함수
function init(){
    //form
    document.querySelector('form').addEventListener('submit', addToDo);
    //clear
    document.getElementById('clear').addEventListener('click', clearToDoList);
    //li 태그(TODO items) 삭제 or 표시
    document.querySelector('ul').addEventListener('click', deleteOrCheck);

}

//form 제출
function addToDo(event) {
    event.preventDefault(); // 기본적으로 실행하는 실행하는 동작 막기
    let todoValue = document.querySelector('input');
    if(todoValue !== ''){
        addTask(todoValue.value); //li 태그로 실제화면에 추가해줌
        todoValue.value = '' //값 초기화 (입력창 비워주기)
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">X</span><input type="checkbox" /><label>${value}</label>`;
    ul.appendChild(li); // 자식 Element 추가
    document.querySelector('.todolist').style.display = "block";
}

function clearToDoList(event){
    let ul = document.querySelector('ul').innerHTML = '';
}

function deleteOrCheck(event){
    if(event.target.className == 'delete'){
        deleteToDo(event);
    }
    else{
        checkToDo(event);
    }
}

function deleteToDo(event){
    let remove = event.target.parentNode;
    let parent = remove.parentNode;
    parent.removeChild(remove);
}

function checkToDo(event){
    let todo = event.target.nextSibling;
    if(event.target.checked){
        todo.style.color = "#c4c4c4";
    }
    else{
        todo.style.color = "#ffffff";
    }
}