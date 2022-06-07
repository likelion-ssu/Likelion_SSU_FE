
class PersonClass { 
    name: string = 'front';
    age: number;
    
    constructor(age?: number) {
        if (age === undefined) {
            this.age = 20;
        } else {
            this.age = age;
        }
    }
}

// 객체 생성
const person_class1 = new PersonClass(39);
const person_class2 = new PersonClass();
console.log(person_class1); 
console.log(person_class1.age); 


