// Q1. 아래 배열을 string으로 변환해 출력해주세요.
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join()); //join 파라미터 안에 구분자 설정 가능
  console.log(fruits.join(" 👉 "));
}

// Q2. 아래 String을 배열로 변환해 출력해주세요.
{
  const fruits = "apple, kiwi, banana, cherry";
  const result2 = fruits.split(", ");
  console.log(result2);
}

// Q3. 배열의 순서를 거꾸로 만들어 출력해주세요. : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result3 = array.reverse(); //원본도 바뀜
  console.log(result3);
}

// Q4. 아래의 배열에서 가장 첫 요소 2개를 제외한 배열을 "새롭게 만들어" 출력해주세요. : [3, 4, 5]
{
  const array = [1, 2, 3, 4, 5];
  //splice -> 원본자체에서 빼버림 , slice -> 원본은 유지함
  const sliceArray = array.slice(2, 5);
  const spliceArray = array.splice(2, 4);
  console.log(`sliceArray : ${sliceArray}`);
  console.log(`spliceArray : ${spliceArray}`);
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
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. score가 90점인 학생을 찾아 출력해주세요.
// find 사용
{
  const smart = (element) => {
    if (element.score === 90) {
      return true;
    }
  };
  const smartStudent = students.find(smart);
  console.log(smartStudent);
}

// Q6. 수업에 등록한 학생 모두를 찾아 출력해주세요. (enrolled : true)
// filter 사용
{
  const dummy = (element) => {
    if (element.enrolled) {
      return true;
    }
  };
  const dummyStudents = students.filter(dummy);
  console.log(dummyStudents);
}

// Q7. 학생들의 점수만을 추출해 배열을 만들어 출력해주세요. : [45, 80, 90, 66, 88]
// map 사용
{
  students.map((student) => console.log(student.score));
}

// Q8. 학생 중 score가 50점보다 낮은 학생이 있는지 그 여부를 확인해 출력해주세요.
// some 사용
// 모든 요소가 충족하는지 확인할때는 every
{
  //some 사용
  const something = (element) => {
    if (element.score < 50) {
      return true;
    }
  };
  const dummyCheckS = students.some(something);
  if (dummyCheckS) console.log("바보가 있네ㅋ");
  else console.log("좀 치는 사람들의 모임");

  //every 사용
  const everything = (element) => {
    if (element.score >= 50) {
      return true;
    }
  };
  const dummyCheckE = students.every(everything);
  if (!dummyCheckE) console.log("바보가 있네ㅋ");
  else console.log("좀 치는 사람들의 모임");
}

// Q9. 학생들의 score의 평균 값을 구해 출력해주세요.
// reduce 사용(prev와 curr)
// reduceRight는 reduce의 순서가 반대가 된 것
{
  const sumScore = (prev, curr) => {
    return prev + curr.score;
  };
  const avg = students.reduce(sumScore, 0) / students.length;
  console.log(`평균 점슈 : ${avg}`);
}

// Q10. 모든 학생의 점수를 string으로 변환해 출력해주세요. : '45, 80, 90, 66, 88'
{
  let scoreList = new Array();
  students.map((student) => scoreList.push(student.score));
  const scoreSB = scoreList.join(", ");
  console.log(scoreSB);
}
// Q11. 학생들의 점수를 오름차순으로 정렬해 String으로 출력해주세요. : '45, 66, 80, 88, 90'
{
  let scoreList = new Array();
  students.map((student) => scoreList.push(student.score));
  scoreList.sort();
  const scoreSB = scoreList.join(", ");
  console.log(scoreSB);
}
// 퀴즈 코드 제공 : https://www.youtube.com/watch?v=3CUjtKJ7PJg
