// Prototype Chain : 연쇄적으로 프로토타입이 연결되어있는 관계

// =============================<< prototype 개념 설명 1 >>================================
function Ultra() {}
Ultra.prototype.ultraProp = true; // Ultra에 ultraProp이라는 값이 저장되어있는 형태

function Super(){}
Super.prototype = new Ultra(); // Ultra 생성자가 만든 객체가 안에 들어감

function Sub(){}
Sub.prototype = new Super(); // Super 생성자가 만든 객체가 안에 들어감, Sub의 prototype에 들어감

let o = new Sub(); // Sub 객체 생성, Sub 생성자의 프로토타입 안에 들어있는 요소들이 o에 들어감
console.log(o.ultraProp); // true

// Ultra (ultraProp) ← Super ← Sub
// Sub에 정의되어있지 않는 요소를 상속받을 수 있도록 해주는 prototype

o.ultraProp = 1;
console.log(o.ultraProp); // 1
// Javascript : o 객체가 ultraProp를 가지고 있는지 확인부터 

// =============================<< prototype 개념 설명 2 >>================================
function Ultra2() {}
Ultra2.prototype.ultraProp = true;

function Super2(){}
Super2.prototype = new Ultra2();

function Sub2(){}
Sub2.prototype = new Super2();
Sub2.prototype.ultraProp = 2; // Sub2에서 ultraProp 값 지정

let o2 = new Sub2(); 
console.log(o2.ultraProp); // 2

// =============================<< prototype 개념 설명 3 >>================================
function Ultra3() {}
Ultra3.prototype.ultraProp = true;

function Super3(){}
let t = new Ultra3();
t.ultraProp = 4;
Super3.prototype = t;

function Sub3(){}
let s = new Super3();
Sub3.prototype = s;

let o3 = new Sub3(); 
console.log(o3.ultraProp); // 4

// 자식에 일어날 일이 부모에 영향을 주지 않도록
// 상속받고자 하는 객체를 넣어줄 것

// =============================<< prototype 응용 >>================================

// javascript : prototype based language
function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function() {
        return this.first + this.second; // 객체를 생성할 때마다 같은 동작을 하는 함수가 계속적으로 실행됨
    }
}

let kim = new Person('kim', 10, 20);
kim.sum = function() {
    return 'modified kim : ' + (this.first + this.second);
}

let lee = new Person('lee', 10, 10);
lee.sum = function() {
    return 'modified lee : ' + (this.first + this.second);
}

console.log("kim.sum() : ", kim.sum());
console.log("lee.sum() : ", lee.sum());

// --------------------------------------------------------------------------
function Person2(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}

Person2.prototype.sum = function() { // 한번만 정의됨 & 실행됨 (원형 정의)
    return this.first + this.second;
}

let park = new Person2('park', 10, 20);
park.sum = function() {
    return 'prototype modified : ' + (this.first + this.second);
}
let son = new Person2('son', 10, 10);
console.log("park.sum() : ", park.sum());
console.log("son.sum() : ", son.sum());

// 객체의 메소드를 호출할 때 해당 속성을 가지고 있는지 먼저 확인 후 프로토타입 사용