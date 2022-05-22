// Shorthand property name
{
    const likelion = {
        name: 'SSULL',
        age: "10",
    };
    
    const name = "SSULL";
    const age = "10";

    const likelion_2 = {
        name: name,
        age: age,
    };

    // key와 value의 값이 동일한 경우 하나로 축약해 사용할 수 있음
    const likelion_es6 = {
        name,
        age,
    }

    console.log(likelion);
    console.log(likelion_2);
    console.log(likelion_es6);
}

// Destructuring Assignment
{
    //object : {} 사용해 object destructuring
    const student = {
        name: "jimin",
        level: 1,
    };

    {
        // 이전
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    {
        // 이후
        const {name, level} = student; // 같은 이름으로 선언한 경우
        console.log(name, level);
    }

    const { name: studentName, level: studentLevel } = student; // 새로운 이름으로 선언한 경우
    console.log(studentName, studentLevel);

    // array : [] 이용해 array destructuring
    const animals = ['cat', 'dog'];

    {
        // 이전
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    {
        // 이후
        const [first, second] = animals;
        console.log(first, second);
    }
}

// Spread Syntax : 주소의 참조값만 복사
{
    const obj1 = {key: "key1"};
    const obj2 = {key: "key2"};
    const obj3 = {key: "key3"};
    const array = [obj1, obj2, obj3];

    // array copy
    const arrayCopy = [...array]; // array 내부 item을 하나씩 가져오는 것 의미 (...)
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: "key4"}];
    obj1.key = 'newKey'; // 원래의 object 값 변경 시 유의할 것 (참조값만을 복사해오는 것)
    console.log(arrayCopy2);

    // object copy
    const obj5 = {...obj3};
    console.log(obj5);

    // array concatenation
    const fruits1 = ['🍋', '🍆'];
    const fruits2 = ['🍓', '🍑', '🍍'];
    const concatFruit = [...fruits1, ...fruits2];
    console.log(concatFruit);

    // object concatenation
    const dog1 = {dog : 'first dog'};
    const dog2 = {dog : 'second dog'};
    const dog = {...dog1, ...dog2}; // key가 동일한 object를 병합할 경우 가장 뒤에 있는 요소가 앞의 것을 덮어씌움
    console.log(dog);
}

// Default parameters
{
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();

        // using default parameter
        {
            function printMessage(message = 'default param') {
                console.log(message);
            }
    
            printMessage('hello');
            printMessage();
        }
    }
}

// Ternary Operator
{
    const isCat = true;

    {
        // 이전
        let component;
        if (isCat) component = 'cat';
        else component = 'dog';
        console.log(component);

        const componentTernary = isCat ? 'cat' : 'dog';
        console.log(componentTernary);
    }
}

// Template Literals
{
    const weather = 'sunny';
    const temparature = '10';

    console.log('weather : ' + weather + ',' + ' temparature : ' + temparature + ' !');
    console.log(`weather : ${weather}, temparature : ${temparature} !`);
}

