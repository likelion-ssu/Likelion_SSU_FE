//조건문 - 시험 성적
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

if (90 <= num) {
  console.log("A");
} else if (80 <= num && num < 90) {
  console.log("B");
} else if (70 <= num && num < 80) {
  console.log("C");
} else if (60 <= num && num < 70) {
  console.log("D");
} else {
  console.log("F");
}
