const { SourceMap } = require("module");

// Q1. 아래 배열을 string으로 변환해 출력해주세요.
{
    const fruits = ['apple', 'banana', 'orange'];
    
    let result_Q1 = fruits.join();
    console.log(result_Q1)
}

// Q2. 아래 String을 배열로 변환해 출력해주세요.
{
  const fruits = 'apple, kiwi, banana, cherry';

  let result_Q2 = fruits.split(",")
  console.log(result_Q2)
}

// Q3. 배열의 순서를 거꾸로 만들어 출력해주세요. : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  let result_Q3 = array.reverse();
  console.log(result_Q3);
  //배열 자체의 순서를 거꾸로 정렬

}

// Q4. 아래의 배열에서 가장 첫 요소 2개를 제외한 배열을 "새롭게 만들어" 출력해주세요. : [3, 4, 5]
{
  const array = [1, 2, 3, 4, 5];

  // let result_splice = array. splice(0,2); // 배열 자체에서 지우는 splice 함수, 제거한 요소를 담은 배열을 return한다.
  //  console.log(result_splice)
  // array.splice(0, 0, 6, 7);
  // console.log("array", array) 추가할 수도 있다.

  let result_Q4 = array.slice(2,5) 
  console.log(result_Q4)
}

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
{
  const result_Q5 = students.find((student) => {
    return student.score === 90;
  })
  console.log(result_Q5)

}

// Q6. 수업에 등록한 학생 모두를 찾아 출력해주세요. (enrolled : true)
{
  const result_Q6 = students.filter((student) => student.enrolled === true);
  console.log(result_Q6)
}



// Q7. 학생들의 점수만을 추출해 배열을 만들어 출력해주세요. : [45, 80, 90, 66, 88]
{
  const result_Q7 = students.map ((student)=> student.score);

  console.log(result_Q7)
}
/* find는 주어진 판별함수를 만족하는 첫번째 요소의 값을 반환한다. 없으면 undefined를 반환한다. --> 첫번째 요소 return
filter는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.  --> 모든 요소 배열로 return
map은 배열내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. --> 해당하는 값을 배열로 return */

// Q8. 학생 중 score가 50점보다 낮은 학생이 있는지 그 여부를 확인해 출력해주세요.
{
  const result_Q8 = students.some((student)=> student.score < 50);

  console.log(result_Q8)
  // 한 명이라도: some, 모두: every
}

// Q9. 학생들의 score의 평균 값을 구해 출력해주세요.
{
//reduce ((prev, curr))
const sum = students.reduce((prev, curr)=> prev + curr.score, 0)
const result_Q9 = sum/students.length

console.log(result_Q9)
}
//초기값이 없으면 두번째 값부터 curr 값에 들어가서 student array의 경우 콜백이 4번 호출된다. 만약 모든 항목이 reducer를 거치게하려면 초기값을 주어야 한다.  

// Q10. 모든 학생의 점수를 string으로 변환해 출력해주세요. : '45, 80, 90, 66, 88'
{
  const result_Q10 = students.map((student)=> student.score).join()
  console.log(result_Q10)
}

// Q11. 학생들의 점수를 오름차순으로 정렬해 String으로 출력해주세요. : '45, 66, 80, 88, 90'
{
  const result_Q11 = students.map((student)=> student.score).sort((a,b)=> a - b).join()
  console.log(result_Q11)
}

// 퀴즈 코드 제공 : https://www.youtube.com/watch?v=3CUjtKJ7PJg