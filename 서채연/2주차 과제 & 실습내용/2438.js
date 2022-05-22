// 별 찍기

let input = require('fs').readFileSync('/dev/stdin').toString();

let star = '';

for (i = 0; i < input; i++) {
    star += '*';
    console.log(star);
}