// ====== 기본적인 데이터 타입 지정 =======
let member_name :string = "jimin"; // string type
let isHere :boolean = true; // boolean type
let studentNum :number = 20221234; // number type
let nullVal :null = null; // null type
let undefinedVal :undefined; // undefined type
let numArr :number[] = [1, 2, 3]; // number type array create

// any type : 모든 데이터 타입 가능
function returnAny(message: any) :any {
    console.log(message);
}
returnAny('ANY value return');

// unknown type : 타입 가드를 통해 타입을 한정시킬 때 사용
    // 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알린다.
    // 즉, JS 코드로는 컴파일 되지 않고, TypeScript 컴파일러에게 타입 정보를 알리기만 한다.
declare const maybe :unknown;

// const aNumber :number = maybe; // X : 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
if (maybe === true) {
    const aBoolean :boolean = maybe;
    // const aString :string = maybe; // X : boolean type guard
}
if (typeof maybe === 'string') {
    const aString :string = maybe;
    // const aBoolean :boolean = maybe; // X : string type guard
}

// never type : 잘못된 타입을 넣는 실수 방지 목적
    // never : 모든 타입의 subtype, 모든 타입에 할당 가능
    // never에는 어떤 것도 할당 불가능
function error(message :string) :never {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() :never {
    while(true) {
        console.log("loop")
    }
}

let a :string = "hello";
if (typeof a !== 'string') {
    a; // let a :never (잘못된 타입 지정의 실수를 막아줌)
}
a; // let a :string

// void type : "빈" 상태 의미, 값을 반환하지 않는 함수의 리턴 타입
function returnVoid(message :string): void {
    console.log(message);
}

// ======== tuple 타입 =======
type Member = [number, boolean]; // tuple 타입 (첫째는 number, 둘째는 boolean)
let john:Member = [123, true];

let x :[string, number];
x = ["hello", 123];
// x = [10, "Mark"] // tuple 타입에 맞지 않음
// x[2] // 길이가 '2'인 튜플 형식 '[string, number]'의 인덱스 '2'에 요소가 없습니다.

const person :[string, number] = ['jimin', 23];
const [first, second] = person;
// const [first, second, third] = person;

// ====== 타입 별칭(커스텀) ========
type MyType = string | number;
let info :MyType = 123;
info = 'front';

// ======== 함수 규격 ========
// 파라미터로 number, return 값으로 number
function myFunction(x : number) :number {
    return x * 2
}

// ======== object 지정 ========
type PersonObject = {
    name : string,
    age : number,
    isLion : boolean,
}
let kim :PersonObject = {name : 'kim', age : 20, isLion : true}

let phone :{phone? : string } = { phone: '010-0000-0000'}; // optional property
let front :{name: string, phone? : string} = {name: 'hyomin'};

// 모든 object 속성 : 지정해줘야할 속성이 많은 경우
type Person2 = {
    [key :string] : string | number,
}
let yoo :Person2 = {name : 'yoo', age: '23', studentNumber: 1234}

// ========= class 문법 ==========
class User {
    name :string;
    age :number;
    phone: string;
    
    constructor(name :string, age :number, phone :string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}

