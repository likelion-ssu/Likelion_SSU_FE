interface PersonInterface_Option2 {
    name: string;
    age?: number;
    [index: string]: any;
}

function hello3(person: PersonInterface_Option2) {
    console.log(`Hello! This is ${person.name}!`);
}

const person4 :PersonInterface_Option2 = {
    name:'likelion',
    part: 'front',
};

hello3(person4);

