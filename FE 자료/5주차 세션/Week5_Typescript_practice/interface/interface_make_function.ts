interface HelloPerson {
    (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string, age?:number) {
    console.log(`Hello! This is ${name}!`)
}

helloPerson('jimin', 39);
helloPerson('front');
