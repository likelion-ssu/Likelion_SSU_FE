const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

// let a = 7;
// let b = 3;

let add = a+b;
let sub = a-b;
let mul = a*b;
let div = Math.floor(a/b);
let rem = a%b;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rem);