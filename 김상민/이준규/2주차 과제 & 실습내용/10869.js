//입출력 - 사칙연산

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);
