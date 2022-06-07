//반복문 - N찍기
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);
let sb = "";

for (let i = 1; i <= num; i++) {
  sb += i;
  sb += "\n";
}

console.log(sb);
