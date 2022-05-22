// 최소, 최대

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];

let a = input[1];

let arr = a.split(' ').sort((a, b) => a - b);
console.log(arr[0], arr[n-1]);
