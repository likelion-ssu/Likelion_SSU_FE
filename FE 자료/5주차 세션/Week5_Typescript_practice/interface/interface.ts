interface PersonInterface {
    name: string;
    age: number;
}

function hello1(person: PersonInterface): void {
    console.log(`Hello! This is ${person.name}!`);
}

// 인터페이스 생성
const person1: PersonInterface = {
    name: 'jimin',
    age: 23,
};

hello1(person1);

