"use strict";
// ============ 🥰🦁 SSU LIKELION FRONT-END Typescript Study 🥰🦁 ===============
// Q1. 아래 데이터 타입을 가지는 변수를 생성해주세요.
// Q1-1. string 데이터 타입을 가지는 변수
let stringVar;
// Q1-2. number 데이터 타입을 가지는 변수
let numberVar;
// Q1-3. string으로 이루어진 array.length 4의 배열
let stringArr;
// Q2. number 타입의 매개변수 a와 b를 입력받아 a * b 를 반환해주는 sum() 함수를 만들어주세요.
const sum = (a, b) => {
    return a * b;
};
// Q3-2. [Q3-1]에서의 MyType을 사용하여 값이 할당된 변수 하나를 생성해주세요.
let kkyu = [24, "freshman"];
// Q4-2. [Q4-1]의 객체 타입을 사용해 person1 객체를 만들어주세요.
let jun99u = { name: "JUNKYULEE", age: 24, emotion: "helpme" };
// Q5-2. [Q5-1]의 인터페이스를 적용해 personInterface1 객체를 만들어주세요.
const personInterface1 = { name: "examHater", age: 24 };
// Q5-3. [Q5-2]의 객체를 매개변수로 전달받아 그 객체의 name을 출력하는 sayHello() 함수를 만들어주세요. (매개변수의 타입은 [Q5-1]에서 작성한 인터페이스입니다.)
const sayHello = (you) => {
    return you.name;
};
console.log(sayHello(personInterface1));
