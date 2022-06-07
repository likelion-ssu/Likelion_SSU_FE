// ===== var와 let의 차이점 (호이스팅) =====

// ====== 호이스팅으로 인한 var의 단점 ======
// console.log(a);
// let a = 2022;
// let a = 2023;
// console.log(a);

// console.log(b);
// b = 1234;
// var b;
// console.log(b);

// ====== 전역변수와 지역변수 : 오류 발생 예시 ======
// var globalVar = 2;

// function foo() {
//     var localVar = 10;
// }
// console.log(localVar);

// ====== 전역변수와 지역변수 ======
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// ====== 변수명의 중복 선언 ======
// var sameVar = 1;
// console.log(sameVar);
// var sameVar = 2;
// console.log(sameVar);

let name = "유지민";
console.log(parseInt(name));

let string = "123456";


let i = 5;
while(i > 0) {
    console.log(i);
    i--;
}

for (let j = 5; j > 0 ; j--) {
    console.log(j);
}