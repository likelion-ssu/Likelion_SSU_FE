// Promise : javascript 안에 내장되어있는 객체(object)
    // 비동기적 연산 수행을 위해 사용

    // 1. state : 수행 중(pending) / 수행 완료 - 성공(fullfilled) / 수행 완료 - 실패(rejected)
    // 2. Producer(정보 제공자) vs Consumer(정보 소비자)

// 1. Producer
    // 새로운 promise가 만들어질 경우, executor 함수가 자동으로 실행됨
const promise = new Promise((resolve, reject) => { // promise : class
    // 시간이 소요되는 작업 ex) 네트워크 통신, 파일 입출력
    console.log("doing something...");
    setTimeout(() => {
        resolve('resolve function called :)');
        reject(new Error('reject function called :('));
    }, 2000);
}); 

// 2. Consumer
    // then, catch, finally
promise
    .then((value) => { 
        // promise가 정상적으로 수행되어 resolve 콜백 함수를 통해 전달한 값
        console.log(value);
    })
    .catch((value) => {
        // promise가 정상적으로 수행되지 않아 reject 콜백 함수를 통해 전달한 값
        console.log(value);
    })
    .finally(
        // promise 수행에 상관 없이 항상 실행되는 동작
        console.log("finally is executed!")
    );

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
});

fetchNumber
    .then((num) => num * 2) 
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1)
            }, 1000);
        });
    })
    .then((num) => console.log(num))

// 4. Promise Error Handling
const getBread = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🥨'), 1000);
    });

const getCoffee = (bread) => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error occurs : ${bread} + ☕`)), 1000);
    });

const getHappy = (coffee) => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${coffee} = 🥰`), 1000);
    });

getBread()
    .then(getCoffee)
    .catch((error) => {
        return '🥑';
    })
    .then(getHappy)
    .then(console.log)

