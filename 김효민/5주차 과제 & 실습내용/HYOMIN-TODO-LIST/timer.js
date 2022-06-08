const $display = document.getElementById("remainTime");

function Timer(duration) {
    let timer = duration;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    setInterval(function () {
        hours = parseInt((timer / 3600) % 24, 10);
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        if (hours == 0) $display.style.color = "red";
        else if (hours <= 3) $display.style.color = "#d92762";
        hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $display.textContent = hours + ":" + minutes + ":" + seconds;

        --timer;
    }, 1000);
}
function setTime() {
    const now = new Date();

    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let nowSecond = now.getSeconds;

    let twentyFourHours = parseInt(24 * 60 * 60);
    let remain =
        twentyFourHours -
        parseInt(nowHour * 60 * 60 + nowMinute * 60 + nowSecond);

    Timer(remain);
}

setTime();
