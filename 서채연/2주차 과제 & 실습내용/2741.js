// N 찍기

let input = require('fs').readFileSync('/dev/stdin').toString();

let a = '';

for (let i = 1; i <= input; i++) {
    a += i + '\n';
}

console.log(a);