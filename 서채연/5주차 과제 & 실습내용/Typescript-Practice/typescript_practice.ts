// ============ ๐ฅฐ๐ฆ SSU LIKELION FRONT-END Typescript Study ๐ฅฐ๐ฆ ===============

// Q1. ์๋ ๋ฐ์ดํฐ ํ์์ ๊ฐ์ง๋ ๋ณ์๋ฅผ ์์ฑํด์ฃผ์ธ์.
    // Q1-1. string ๋ฐ์ดํฐ ํ์์ ๊ฐ์ง๋ ๋ณ์
    let number1_1 : string = '์๋ํ์ธ์';
    // Q1-2. number ๋ฐ์ดํฐ ํ์์ ๊ฐ์ง๋ ๋ณ์
    let number1_2 : number = 1234;
    // Q1-3. string์ผ๋ก ์ด๋ฃจ์ด์ง array.length 4์ ๋ฐฐ์ด
    let number1_3 : string[] = ['๊ฐ', '๋', '๋ค', '๋ผ'];

// Q2. number ํ์์ ๋งค๊ฐ๋ณ์ a์ b๋ฅผ ์๋ ฅ๋ฐ์ a * b ๋ฅผ ๋ฐํํด์ฃผ๋ sum() ํจ์๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.
    function sum (a : number, b : number) {
        return a * b;
    }


// Q3. [ํ์ ๋ณ์นญ ์ฌ์ฉํด๋ณด๊ธฐ] 
    // Q3-1. MyType์ ์ด๋ฆ์ผ๋ก ์ฒซ๋ฒ์งธ ์์๋ number, ๋๋ฒ์งธ ์์๋ string์ ๋ฐ๋ tuple ์๋ฃํ์ ๋ง๋ค์ด์ฃผ์ธ์.
    type MyType = [number, string];
    // Q3-2. [Q3-1]์์์ MyType์ ์ฌ์ฉํ์ฌ ๊ฐ์ด ํ ๋น๋ ๋ณ์ ํ๋๋ฅผ ์์ฑํด์ฃผ์ธ์.
    let number3_2 : MyType = [123, 'Hi'];

// Q4. [๊ฐ์ฒด ๋ง๋ค์ด๋ณด๊ธฐ]
    // Q4-1. Person ์ด๋ฆ์ ๊ฐ์ง๋ "๊ฐ์ฒด ํ์"์ "type" ํค์๋๋ฅผ ์ฌ์ฉํ์ฌ ๋ง๋ค์ด์ฃผ์ธ์.
    type Person = {
        name : string;
        age ?: number;
        [key : string] : string | number;
    }
        // Person ๊ฐ์ฒด ํ์์ ํ๋กํผํฐ
            // 1. name ํ๋กํผํฐ : string์ผ๋ก ์ด๋ฃจ์ด์ง๋ฉฐ, "ํ์" ์์
            // 2. age ํ๋กํผํฐ : number๋ก ์ด๋ฃจ์ด์ง๋ฉฐ, "์ ํ" ์์
            // 3. ์ถ๊ฐ์ ์ผ๋ก ๋ฑ๋ก ๊ฐ๋ฅํ ํ๋กํผํฐ (key๋ string์ผ๋ก ์ด๋ฃจ์ด์ง) : value๋ string ๋๋ number์ ํ์์ ๊ฐ์ง
    
    // Q4-2. [Q4-1]์ ๊ฐ์ฒด ํ์์ ์ฌ์ฉํด person1 ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.
    let person1 : Person = {
        name : 'chaeyeon',
        age : 22,
        role : 'Front-End'   
    }

// Q5. [์ธํฐํ์ด์ค ๋ง๋ค์ด๋ณด๊ธฐ]
    // Q5-1. PersonInterface ์ด๋ฆ์ ๊ฐ์ง๋ "์ธํฐํ์ด์ค"๋ฅผ "interface" ํค์๋๋ฅผ ์ฌ์ฉํ์ฌ ๋ง๋ค์ด์ฃผ์ธ์.
    interface   PersonInterface {
        name : string,
        age ?: number
    }
            // PersonInterface ๊ฐ์ฒด ํ์์ ํ๋กํผํฐ
                // 1. name ํ๋กํผํฐ : string์ผ๋ก ์ด๋ฃจ์ด์ง๋ฉฐ, "ํ์" ์์
                // 2. age ํ๋กํผํฐ : number๋ก ์ด๋ฃจ์ด์ง๋ฉฐ, "์ ํ" ์์

    // Q5-2. [Q5-1]์ ์ธํฐํ์ด์ค๋ฅผ ์ ์ฉํด personInterface1 ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์.
    let personInterface1 : PersonInterface = {
        name : 'chaeyeon',
        age : 22
    }
    // Q5-3. [Q5-2]์ ๊ฐ์ฒด๋ฅผ ๋งค๊ฐ๋ณ์๋ก ์ ๋ฌ๋ฐ์ ๊ทธ ๊ฐ์ฒด์ name์ ์ถ๋ ฅํ๋ sayHello() ํจ์๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์. (๋งค๊ฐ๋ณ์์ ํ์์ [Q5-1]์์ ์์ฑํ ์ธํฐํ์ด์ค์๋๋ค.)
    function sayHello (personInterface1 : PersonInterface) {
        console.log(personInterface1.name);
    }