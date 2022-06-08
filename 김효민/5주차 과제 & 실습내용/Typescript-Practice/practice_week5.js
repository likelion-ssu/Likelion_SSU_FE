"use strict";
//Q1-1. string 데이터 타입을 가지는 변수
const myName = "Myname";
// Q1-2. number 데이터 타입을 가지는 변수
const myNumber = 2022;
// Q1-3. string으로 이루어진 array.length 4의 배열
const myArray = ["a", "b", "c", "d"];
// Q2. number 타입의 매개변수 a와 b를 입력받아 a * b 를 반환해주는 sum() 함수를 만들어주세요.
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));
const printType = function (m) {
    console.log(`${m[0]} && ${m[1]}`);
};
let m = [7, "seven!!"];
printType(m);
const person1 = {
    name: "hyomin",
    age: 3,
    groupName: "likelion",
    address: "상도",
};
const person2 = { name: "lion" };
function sayHello(p) {
    console.log(p.name + "♥️");
}
sayHello(person2);
