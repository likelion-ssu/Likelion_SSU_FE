// 10869.
let input=require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const num1=parseInt(input[0]);
const num2=parseInt(input[1]);

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log((num1/num2).toFixed(0));
console.log(num1%num2);
