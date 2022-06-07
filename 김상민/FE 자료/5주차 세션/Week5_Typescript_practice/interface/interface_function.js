"use strict";
const person5 = {
    name: 'front',
    age: 10,
    hello: function () {
        console.log(`hello! This is ${this.name}!`);
    }
};
const person6 = {
    name: 'front2',
    age: 10,
    hello() {
        console.log(`hello! This is ${this.name}!`);
    }
};
person5.hello();
person6.hello();
