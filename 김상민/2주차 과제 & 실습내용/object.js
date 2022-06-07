//이름 객첵
// 나이, 학과, 학번 ,이메일
const 김상민 = {
    age : 25,
    major: "chemical-engineering",
    "student-number": 17,
    email: "kimpran@naver.com",
};

//1. 나이 -> 20 변경
김상민.age = 20
//2. 이메일 삭제

//3. 본인의 주소 프로퍼티 추가


console.log(김상민)

delete 김상민.email;

김상민.address = "Seoul"

console.log(김상민)

