// 배열 - 최소, 최대
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

let sb = "";
const m = Math.min(...arr);
sb += `${m} `;
const x = Math.max(...arr);
sb += x;

console.log(sb);
