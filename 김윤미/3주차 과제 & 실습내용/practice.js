// 내이름 객체
// 나이, 성별, 학과, 학번, 이메일

let youm={
    age:22,
    name:'youn-mi',
    major:'industrial',
    'student-number':20201322,
    mail:'juliet0524@naver.com'
};
console.log(youm);
youm.age = 20;
console.log(youm);
delete youm.mail;
console.log(youm);
youm.address='파주';
console.log(youm);

// 멤버로 클래스 생성(클래스 이름 대문자로 시작이 좋음)
class Front {
    constructor(name,number){
        this.name=name;
        this.number=number;
    }
};
const student0=new Front('지민','0');
const student1=new Front('채연','1');
const student2= new Front('윤미','2');
const student3= new Front('효민','3');
const student4= new Front('상민','4');
const student5= new Front('준규','5');
console.log(student0,student1,student2)

// Q1. 아래 배열을 string으로 변환해 출력해주세요.
{
    const fruits = ['apple', 'banana', 'orange'];
}
//1. join-> 배열 내부의 모든 원소를 string으로 변환
let result_Q1=fruits.join();
console.log(result_Q1);
result_Q1=fruits.join("and")
console.log(result_Q1);

// Q2. 아래 String을 배열로 변환해 출력해주세요.
{
  const fruits = 'apple, kiwi, banana, cherry';
}
//2. split-> string을 array로 변환 함수
let result_Q2=fruits.split(',');//구분자를 인자로 전달, 안하면 다 한개의 원소로 들어감
// Q3. 배열의 순서를 거꾸로 만들어 출력해주세요. : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}
//3. reverse, 원본 배열 자체의 순서를 거꾸로 정렬 , result_Q3랑 array 출력하면 원본도 거꾸로 출력됨
let result_Q3=array.reverse();

// Q4. 아래의 배열에서 가장 첫 요소 2개를 제외한 배열을 "새롭게 만들어" 출력해주세요. : [3, 4, 5]
{
  const array = [1, 2, 3, 4, 5];
}
//4. splice함수 - 원본 배열이 바뀜 
let result_splice=array.splice(0,2);
// 
arrya.splice(0,0,1,2);//원본 복구
//slice-원본 손상 안시킴
let result_Q4=array.slice(2,5);//index:2~4
// =======================================
//  앞으로 문제에서 사용하게 될 클래스입니다.
// =======================================

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. score가 90점인 학생을 찾아 출력해주세요.
//5. find->조건을 만족하는 첫번째! 요소를 찾아줌

{
    const result_Q5=students.find((student)=>{
        return student.score===90;
    })
}

// Q6. 수업에 등록한 학생 모두를 찾아 출력해주세요. (enrolled : true)
// 6.filter:모든 요소를 찾아줌
{
    const result_Q6=students.filter((student)=>student.enrolled===true);
}

// Q7. 학생들의 점수만을 추출해 배열을 만들어 출력해주세요. : [45, 80, 90, 66, 88]
//7. map:  배열의 요소를 다른것으로 변환
{
    const result_Q7=students.map((student)=>student.score);
}
//2배로 만들기
{
    const result_Q7=students.map((student)=>student.score * 2);
}
// Q8. 학생 중 score가 50점보다 낮은 학생이 있는지 그 여부를 확인해 출력해주세요.
// some: 조건 만족하는게 있는지 확인 하나라도 있으면 true
{
    const result_Q8=students.some((student)=>student.score<50);
}
//every: 모든 요소가 만족하는지 확인 
{
    const result_Q8_1=students.every((student)=>student.score<50);
}
// Q9. 학생들의 score의 평균 값을 구해 출력해주세요.
// reduce:모든값을 주넉할떄 사용
{
    const result_Q9=students.reduce((prev,curr)=>{
        return prev+curr.score;
    },0);
    console.log(result_Q9/students.length);
}

// Q10. 모든 학생의 점수를 string으로 변환해 출력해주세요. : '45, 80, 90, 66, 88'
// map->join
{
    const result_Q10 = students.map((student) => student.score).join();
    console.log(result_Q10);
}

// Q11. 학생들의 점수를 오름차순으로 정렬해 String으로 출력해주세요. : '45, 66, 80, 88, 90'
{
    const result_Q11 = students
    .map((student) => student.score)
    .sort((a,b) => a - b) 
    .join();
    console.log(result_Q11);

    const result_Q11_1 = students
    .map((student) => student.score)
    .sort((a,b) => b - a)
    .join();
    console.log(result_Q11_1);
}