const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(min);
console.log(max);