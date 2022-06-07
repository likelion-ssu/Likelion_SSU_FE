"use strict";
// ====== 기본적인 데이터 타입 지정 =======
let member_name = "jimin"; // string type
let isHere = true; // boolean type
let studentNum = 20221234; // number type
let nullVal = null; // null type
let undefinedVal; // undefined type
let numArr = [1, 2, 3]; // number type array create
// any type : 모든 데이터 타입 가능
function returnAny(message) {
    console.log(message);
}
returnAny('ANY value return');
// const aNumber :number = maybe; // X : 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
if (maybe === true) {
    const aBoolean = maybe;
    // const aString :string = maybe; // X : boolean type guard
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean :boolean = maybe; // X : string type guard
}
// never type : 잘못된 타입을 넣는 실수 방지 목적
// never : 모든 타입의 subtype, 모든 타입에 할당 가능
// never에는 어떤 것도 할당 불가능
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) {
        console.log("loop");
    }
}
let a = "hello";
if (typeof a !== 'string') {
    a; // let a :never (잘못된 타입 지정의 실수를 막아줌)
}
a; // let a :string
// void type : "빈" 상태 의미, 값을 반환하지 않는 함수의 리턴 타입
function returnVoid(message) {
    console.log(message);
}
let john = [123, true];
let x;
x = ["hello", 123];
// x = [10, "Mark"] // tuple 타입에 맞지 않음
// x[2] // 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.
const person = ['jimin', 23];
const [first, second] = person;
let info = 123;
info = 'front';
// ======== 함수 규격 ========
// 파라미터로 number, return 값으로 number
function myFunction(x) {
    return x * 2;
}
let kim = { name: 'kim', age: 20, isLion: true };
let phone = { phone: '010-0000-0000' }; // optional property
let front = { name: 'hyomin' };
let yoo = { name: 'yoo', age: '23', studentNumber: 1234 };
// ========= class 문법 ==========
class User {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}
