"use strict";
// ============ ๐ฅฐ๐ฆ SSU LIKELION FRONT-END Typescript Study ๐ฅฐ๐ฆ ===============
// Q1. ์๋ ๋ฐ์ดํฐ ํ์์ ๊ฐ์ง๋ ๋ณ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
// Q1-1. string ๋ฐ์ดํฐ ํ์์ ๊ฐ์ง๋ ๋ณ์
let stringVar;
// Q1-2. number ๋ฐ์ดํฐ ํ์์ ๊ฐ์ง๋ ๋ณ์
let numberVar;
// Q1-3. string์ผ๋ก ์ด๋ฃจ์ด์ง array.length 4์ ๋ฐฐ์ด
let stringArr;
// Q2. number ํ์์ ๋งค๊ฐ๋ณ์ a์ b๋ฅผ ์๋ ฅ๋ฐ์ a * b ๋ฅผ ๋ฐํํด์ฃผ๋ sum() ํจ์๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.
const sum = (a, b) => {
    return a * b;
};
// Q3-2. [Q3-1]์์์ MyType์ ์ฌ์ฉํ์ฌ ๊ฐ์ด ํ ๋น๋ ๋ณ์ ํ๋๋ฅผ ์์ฑํด์ฃผ์ธ์.
let kkyu = [24, "freshman"];
// Q4-2. [Q4-1]์ ๊ฐ์ฒด ํ์์ ์ฌ์ฉํด person1 ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.
let jun99u = { name: "JUNKYULEE", age: 24, emotion: "helpme" };
// Q5-2. [Q5-1]์ ์ธํฐํ์ด์ค๋ฅผ ์ ์ฉํด personInterface1 ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.
const personInterface1 = { name: "examHater", age: 24 };
// Q5-3. [Q5-2]์ ๊ฐ์ฒด๋ฅผ ๋งค๊ฐ๋ณ์๋ก ์ ๋ฌ๋ฐ์ ๊ทธ ๊ฐ์ฒด์ name์ ์ถ๋ ฅํ๋ sayHello() ํจ์๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์. (๋งค๊ฐ๋ณ์์ ํ์์ [Q5-1]์์ ์์ฑํ ์ธํฐํ์ด์ค์๋๋ค.)
const sayHello = (you) => {
    return you.name;
};
console.log(sayHello(personInterface1));
