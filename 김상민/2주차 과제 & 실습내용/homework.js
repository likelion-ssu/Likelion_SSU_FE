//Hello world
console.log("Hello World!");



//사칙연산
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);

//시험성적 1
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const score = Number(input)

if (score >=90) {
    console.log("A")
} else if (score >=80) {
    console.log("B")
} else if (score >=70) {
    console.log("C")
} else if (score >=60) {
    console.log("D")
}  else {
    console.log("F")
}

//시험성적 2
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const score = Number(input)

const grade = (
    score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    score >= 60 ? "D" : "F"
)
console.log(grade);


//윤년
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const year = Number(input);

const isLeapYear = ((year%4 === 0 && year%100 !==0 )|| year%400 === 0)
console.log(Number(isLeapYear))


// N 출력
const input = require("fs").readFileSync("/dev/stdin").toString();
const N = parseInt(input);

let num = "";

for (let i = 1; i <= N ; i++) {
    num = num + i + "\n"
}

console.log(num);


// 별 찍기
const input = require("fs").readFileSync("/dev/stdin").toString();
const N = parseInt(input);

let star = "";

for (let i = 1; i <= N; i++){
    star = star + "*".repeat(i) +"\n"
}

console.log(star);

// 최소, 최대 
const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`)



/* const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const numArr = [parseInt(...arr)]

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`)

Math.min, Math.max에 number array의 value를 넣어야해서 이렇게 했더니 틀리고 그냥 arr의 value를 넣으니까 맞았음... 이유를 모르겠어요.. ?_? */

