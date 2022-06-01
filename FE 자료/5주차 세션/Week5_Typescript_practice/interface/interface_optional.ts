interface PersonInterface_Option {
    name: string;
    age?: number;
}

function hello2(person: PersonInterface_Option) {
    console.log(`Hello! This is ${person.name}!`)
}

const person2: PersonInterface_Option = {name: 'jimin', age: 23};
const person3: PersonInterface_Option = {name: 'front'};

hello2(person2);
hello2(person3);

