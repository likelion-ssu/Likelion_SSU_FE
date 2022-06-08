//이벤트 리스너 추가하는 함수
let checkList = [];
const $taskCount = document.querySelector("#task-count");
const $totalCount = document.querySelector("#total-count");

function init() {
    document.querySelector("form").addEventListener("submit", addTodo);
    //DELETE ALL 이벤트
    document.getElementById("clear").addEventListener("click", deleteAllTodo);
    //li 태그(todo item) 삭제
    document.querySelector("ul").addEventListener("click", deleteOrCheck);
}

function addTodo(event) {
    event.preventDefault();
    let toDoValue = document.querySelector(".edittext");
    if (toDoValue.value !== "") {
        addTask(toDoValue.value);
        toDoValue.value = "";
    }
}

function deleteAllTodo(event) {
    let ul = (document.querySelector("ul").innerHTML = "");
    $taskCount.textContent = 0;
    $totalCount.textContent = 0;
    checkList = [];
}

function deleteOrCheck(event) {
    if (event.target.className == "delete") {
        deleteTodo(event);
    } else {
        checkTodo(event);
    }
}

function deleteTodo(event) {
    let remove = event.target.parentNode; // event.target : 자식 delete
    let parent = remove.parentNode; //delete 클래스명을 가진 엘리먼트의 부모 노드
    let content = remove.querySelector("label").textContent;
    let removeFlag = false;
    checkList.findIndex((i, index) => {
        if (i === content && !removeFlag) {
            checkList.splice(index, 1);
            removeFlag = true;
        }
    });

    parent.removeChild(remove);
    $totalCount.textContent = checkList.length;
    if (
        parseInt($taskCount.textContent) !== 0 &&
        remove.classList.contains("done")
    )
        //완료된 아이일 경우만 상태 변화
        $taskCount.textContent = parseInt($taskCount.textContent) - 1;
}

function checkTodo(event) {
    let todo = event.target.nextSibling;
    console.log(event.target);
    if (todo === null || todo.tagName !== "LABEL") return;
    //li
    try {
        if (event.target.checked) {
            event.target.parentNode.classList.add("done");
            todo.style.color = "#c4c4c4"; //todo label
            event.target.style.color = "#3D838B";
            $taskCount.textContent = parseInt($taskCount.textContent) + 1;
        } else {
            todo.style.color = "#000000";
            todo.parentNode.classList.remove("done");
            if ($taskCount.textContent != 0)
                $taskCount.textContent = parseInt($taskCount.textContent) - 1;
        }
        CanIsleepMessage();
    } catch (error) {
        console.log(error);
    }
}

function CanIsleepMessage() {
    const tasks = document.querySelector("#task-count");
    const total = document.querySelector("#total-count");
    setTimeout(() => {
        if (checkList.length === parseInt(tasks.textContent))
            alert("수면을 허락합니다. 굿밤🌕");
        else if (parseInt(total.textContent) - parseInt(tasks.textContent) < 4)
            alert("잘 수 있을지도?");
    }, 500);
}

function addTask(value) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    const tasks = document.querySelector("#task-count");
    const total = document.querySelector("#total-count");
    li.className = "task";
    li.innerHTML = `<span class="delete">✘</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li);
    checkList.push(value);
    total.textContent = checkList.length;

    if (checkList.length - parseInt(tasks.textContent) > 4)
        alert("축하합니다. 밤샘 당첨되셨습니다.");
}

init();
