const btn = document.getElementById("btn");
btn.addEventListener("click", onClickButton);

function onClickButton(event) {
    alert("click!!!");
    console.log(event.target);
    console.log(event.btn);
}
