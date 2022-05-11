// 백준 10869 사칙연산
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
// 7 3 -> input[0] : 7, input[1] : 3 -> String
const num1 = Number(input[0]); // 7
const num2 = Number(input[1]); //3

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);