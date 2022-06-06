// 인터페이스 : 컴파일 시 사라짐 - 타입
interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// 구현체 (Interface를 implements)
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`Hello! This is ${this.name}`);
    }
}

const person7 = new Person('front');
const person8:IPerson1 = new Person('likelion');
person7.hello();

