interface PersonInterface_Function {
    name: string;
    age: number;
    hello(): void;
}

const person5: PersonInterface_Function = {
    name: 'front',
    age: 10,
    hello: function() :void {
        console.log(`hello! This is ${this.name}!`);
    }
}

const person6: PersonInterface_Function = {
    name: 'front2',
    age: 10,
    hello() :void {
        console.log(`hello! This is ${this.name}!`);
    }
}

person5.hello();
person6.hello();

