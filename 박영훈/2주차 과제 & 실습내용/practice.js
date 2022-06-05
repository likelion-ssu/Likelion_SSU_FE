// Q1. 아래 배열을 string으로 변환해 출력해주세요.
{
    const fruits = ['apple', 'banana', 'orange'];
    //join : string으로 만들어줌
    //let result_Q1 = fruits.join();
    let result_Q1 = fruits.join(' and ');
    console.log(result_Q1);
  }
  
  // Q2. 아래 String을 배열로 변환해 출력해주세요.
  {
    const fruits = 'apple, kiwi, banana, cherry';
    let result_Q2 = fruits.split(',');
    console.log(result_Q2);
  }
  
  // Q3. 배열의 순서를 거꾸로 만들어 출력해주세요. : [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    let result_Q3 = array.reverse();
    console.log(result_Q3);
    array.reverse();
    console.log(array);
  }
  
  // Q4. 아래의 배열에서 가장 첫 요소 2개를 제외한 배열을 "새롭게 만들어" 출력해주세요. : [3, 4, 5]
  {
    const array = [1, 2, 3, 4, 5];
    const result_Q4 = array.slice(2,5);
    console.log(result_Q4);
    console.log(array);
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
    const result_Q5 = students.find((student) =>{
      return student.score === 90;
    })
    console.log(result_Q5);
  }
  
  // Q6. 수업에 등록한 학생 모두를 찾아 출력해주세요. (enrolled : true)
  {
    const result_Q6 = students.filter((student) => student.enrolled === true);
    console.log(result_Q6);
  }
  
  // Q7. 학생들의 점수만을 추출해 배열을 만들어 출력해주세요. : [45, 80, 90, 66, 88]
  {
    const result_Q7 = students.map((student) => student.score);
    console.log(result_Q7);
  }
  
  // Q8. 학생 중 score가 50점보다 낮은 학생이 있는지 그 여부를 확인해 출력해주세요.
  {
    const result_Q8 = students.some((student) => student.score < 50);
    console.log(result_Q8);
  }
  
  // Q9. 학생들의 score의 평균 값을 구해 출력해주세요.
  {
  
  
    const result_Q9 = students.reduce((prev, curr) => {
      return prev = curr.score;
    },0);
    console.log(result_Q9/students.length);
  }
  
  // Q10. 모든 학생의 점수를 string으로 변환해 출력해주세요. : '45, 80, 90, 66, 88'
  {
    const result_Q10 = students.map((student) => student.score).join();
    console.log(result_Q10);
  }
  
  // Q11. 학생들의 점수를 오름차순으로 정렬해 String으로 출력해주세요. : '45, 66, 80, 88, 90'
  {
    const result_Q11 = students.map((student) => student.score).sort((a,b) => a - b).join();
  }
  
  // 퀴즈 코드 제공 : https://www.youtube.com/watch?v=3CUjtKJ7PJg