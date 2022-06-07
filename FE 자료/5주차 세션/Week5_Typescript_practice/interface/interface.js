"use strict";
function hello1(person) {
    console.log(`Hello! This is ${person.name}!`);
}
// 인터페이스 생성
const person1 = {
    name: 'jimin',
    age: 23,
};
hello1(person1);
