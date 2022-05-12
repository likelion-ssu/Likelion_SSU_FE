// 백준 2741 N 출력

let input = Number(require('fs')
    .readFileSync('/dev/stdin')
    .toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);