let myName ={
    age: 25,
    major: 'ai convergence',
    stdNum: 20170756,
    email: 'hoony4509@naver.com',
};

myName.age = 20;
delete myName.email;
myName.adress = 'Seoul Seocho';

console.log(myName);