//사칙연산

let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

// let a = 7;
// let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);