//반복문 - 별찍기
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);
let sb = "";

for (let i = 1; i <= num; i++) {
  for (let j = 0; j < i; j++) {
    sb += "*";
  }
  sb += "\n";
}

console.log(sb);
