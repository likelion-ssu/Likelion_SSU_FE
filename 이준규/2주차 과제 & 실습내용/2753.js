//조건문 - 윤년
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
