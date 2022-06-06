"use strict";
// 구현체 (Interface를 implements)
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`Hello! This is ${this.name}`);
    }
}
const person7 = new Person('front');
const person8 = new Person('likelion');
person7.hello();
