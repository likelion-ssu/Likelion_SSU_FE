//Q1-1. string 데이터 타입을 가지는 변수
const myName: string = "Myname";
// Q1-2. number 데이터 타입을 가지는 변수
const myNumber: number = 2022;
// Q1-3. string으로 이루어진 array.length 4의 배열
const myArray: Array<string> = ["a", "b", "c", "d"];
// Q2. number 타입의 매개변수 a와 b를 입력받아 a * b 를 반환해주는 sum() 함수를 만들어주세요.
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(5, 3));
// Q3. [타입 별칭 사용해보기]
type MyType = [number, string];

const printType = function (m: MyType) {
    console.log(`${m[0]} && ${m[1]}`);
};
let m: MyType = [7, "seven!!"];
printType(m);

// Q4. [객체 만들어보기]
type Person = {
    [key: string]: string | number;
    name: string;
    age?: number | any;
    groupName: string; // true ->male
};

type Person2 = {
    [key: string]: string | number;
};
const person1: Person = {
    name: "hyomin",
    age: 3,
    groupName: "likelion",
    address: "상도",
};

// Q5. [인터페이스 만들어보기]
interface PersonInterface {
    name: string;
    age?: number;
}

const person2: PersonInterface = { name: "lion" };
function sayHello(p: PersonInterface) {
    console.log(p.name + "♥️");
}
sayHello(person2);
