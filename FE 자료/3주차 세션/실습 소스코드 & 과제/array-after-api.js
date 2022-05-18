// Q1. 아래 배열을 string으로 변환해 출력해주세요.
{
    const fruits = ['apple', 'banana', 'orange'];
    
    // 1. join : 배열 내부의 모든 원소를 string으로 변환해주는 함수 (인자로 구분자)
    let result_Q1 = fruits.join();
    console.log(result_Q1); // apple,banana,orange

    result_Q1 = fruits.join(" and ");
    console.log(result_Q1); // apple and banana and orange
}

// Q2. 아래 String을 배열로 변환해 출력해주세요.
{
    const fruits = 'apple, kiwi, banana, cherry';

    // 2. split : string을 array로 변환해주는 함수 split(구분자, 제한)
    let result_Q2 = fruits.split(','); // 구분자 전달 X → 하나의 배열 원소에 모두 들어감
    console.log(result_Q2); // [ 'apple', ' kiwi', ' banana', ' cherry' ]
}

// Q3. 배열의 순서를 거꾸로 만들어 출력해주세요. : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];

    // 3. reverse : 배열의 순서를 거꾸로 정렬해주는 함수
    let result_Q3 = array.reverse(); 
    console.log(result_Q3); // [ 5, 4, 3, 2, 1 ]
    // 배열 자체의 순서를 거꾸로 정렬
    console.log(array); // [ 5, 4, 3, 2, 1 ]
}

// Q4. 아래의 배열에서 가장 첫 요소 2개를 제외한 배열을 "새롭게 만들어" 출력해주세요. : [3, 4, 5]
{
    const array = [1, 2, 3, 4, 5];

    let result_splice = array.splice(0, 2); // 배열 자체에서 지우는 splice 함수
    console.log(result_splice); // [1, 2]
    console.log(array); // [3, 4, 5]

    array.splice(0, 0, 1, 2);

    // 4. slice : 배열의 특정 부분을 리턴하는 함수 
        // - slice(a, b) : a 이상 b 미만 
    let result_Q4 = array.slice(2, 5); // index : 2 ~ 4
    console.log(result_Q4); // [ 3, 4, 5 ]
    console.log(array); // [ 1, 2, 3, 4, 5 ]
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
    // 5. find : 조건을 만족하는 첫번째 요소를 찾아주는 함수 (콜백함수 전달)
        // 첫번째로 true를 리턴하는 요소를 찾아내는 작업
    const result_Q5 = students.find((student) => {
        return student.score === 90;
    })
    console.log(result_Q5); // Student { name: 'C', age: 30, enrolled: true, score: 90 }

    const result_Q5_simple = students.find((student) => student.score === 90);

}

// Q6. 수업에 등록한 학생 모두를 찾아 출력해주세요. (enrolled : true)
{
    // 6. filter : 조건을 만족하는 모든 요소를 찾아주는 함수 (콜백함수 전달)
    const result_Q6 = students.filter((student) => student.enrolled === true);
    console.log(result_Q6);
    // [
    //     Student { name: 'A', age: 29, enrolled: true, score: 45 },
    //     Student { name: 'C', age: 30, enrolled: true, score: 90 },
    //     Student { name: 'E', age: 18, enrolled: true, score: 88 }
    //   ]
}

// Q7. 학생들의 점수만을 추출해 배열을 만들어 출력해주세요. : [45, 80, 90, 66, 88]
{
    // 7. map : 배열의 요소를 다른 것으로 변환해주는 함수
    const result_Q7 = students.map((student) => student.score);
    console.log(result_Q7); // [ 45, 80, 90, 66, 88 ]

    // Q7-1. 학생들의 score를 2배로 만들어주고 싶다면 ?
    const result_Q7_1 = students.map((student) => student.score * 2);
    console.log(result_Q7_1); // [ 90, 160, 180, 132, 176 ]
}

// Q8. 학생 중 score가 50점보다 낮은 학생이 있는지 그 여부를 확인해 출력해주세요.
{
    // 8. some : 조건을 만족하는 요소가 있는지 여부를 확인해주는 함수 (!== find )
        // 만약 하나의 요소라도 충족한다면 ? true
    const result_Q8 = students.some((student) => student.score < 50);
    console.log(result_Q8); // true

    // 8-1. every : 모든 요소가 조건을 충족하는지 여부를 확인해주는 함수
        // 만약 하나의 요소라도 충족한다면 ? false
    const result_Q8_1 = students.every((student) => student.score < 50);
    console.log(result_Q8_1); // false
}

// Q9. 학생들의 score의 평균 값을 구해 출력해주세요.
{
    // 9. reduce : 배열의 모든 값을 누적할 때 사용하는 함수 (콜백함수 & 초기값 전달)
    const result_Q9_ex = students.reduce((prev, curr) => {
        console.log('-------');
        console.log(prev);
        console.log(curr);
        return curr;
        // 배열 요소 하나하나씩 curr에 전달됨 → 다음 호출 시 curr는 prev로 전달됨 
    });
    // -------
    // Student { name: 'A', age: 29, enrolled: true, score: 45 }
    // Student { name: 'B', age: 28, enrolled: false, score: 80 }
    // -------
    // Student { name: 'B', age: 28, enrolled: false, score: 80 }
    // Student { name: 'C', age: 30, enrolled: true, score: 90 }
    // -------
    // Student { name: 'C', age: 30, enrolled: true, score: 90 }
    // Student { name: 'D', age: 40, enrolled: false, score: 66 }
    // -------
    // Student { name: 'D', age: 40, enrolled: false, score: 66 }
    // Student { name: 'E', age: 18, enrolled: true, score: 88 }

    const result_Q9 = students.reduce((prev, curr) => {
        return prev + curr.score;
        // 배열 요소 하나하나씩 curr에 전달됨 → 다음 호출 시 curr는 prev로 전달됨 
    }, 0); // initial value : 0부터 시작
    console.log(result_Q9 / students.length);

    // 9-1. reduceRight : 배열의 모든 값을 거꾸로의 순서로 누적해 사용하는 함수
    const result_09_ex_2 = students.reduceRight((prev, curr) => {
        console.log('-------');
        console.log(prev);
        console.log(curr);
        return curr;
        // 배열 요소 하나하나씩 curr에 전달됨 → 다음 호출 시 curr는 prev로 전달됨 
    });
    // -------
    // Student { name: 'E', age: 18, enrolled: true, score: 88 }
    // Student { name: 'D', age: 40, enrolled: false, score: 66 }
    // -------
    // Student { name: 'D', age: 40, enrolled: false, score: 66 }
    // Student { name: 'C', age: 30, enrolled: true, score: 90 }
    // -------
    // Student { name: 'C', age: 30, enrolled: true, score: 90 }
    // Student { name: 'B', age: 28, enrolled: false, score: 80 }
    // -------
    // Student { name: 'B', age: 28, enrolled: false, score: 80 }
    // Student { name: 'A', age: 29, enrolled: true, score: 45 }
}

// Q10. 모든 학생의 점수를 string으로 변환해 출력해주세요. : '45, 80, 90, 66 + 88'
{
    // 10. map → join
    const result_Q10 = students
    .map((student) => student.score) //[45, 80, 90, 66, 88]
    .join();
    console.log(result_Q10);

    // 10-1. 50점 이상인 사람들의 점수만 string으로
    const result_Q10_1 = students
    .map((student) => student.score) //[45, 80, 90, 66, 88]
    .filter((score) => score >= 50) // [80, 90, 66, 88]
    .join();
    console.log(result_Q10_1); //'80, 90, 66, 88'
}

// Q11. 학생들의 점수를 오름차순으로 정렬해 String으로 출력해주세요. : '45, 66, 80, 88, 90'
{
    // 11. sort : 배열의 요소를 정렬해주는 함수
    const result_Q11 = students
    .map((student) => student.score)
    .sort((a,b) => a - b) // 45 50 , 50 45
    .join();
    console.log(result_Q11);

    const result_Q11_1 = students
    .map((student) => student.score)
    .sort((a,b) => b - a)
    .join();
    console.log(result_Q11_1);
}

// [45, 66, 80, 88, 90]

// 퀴즈 코드 제공 : https://www.youtube.com/watch?v=3CUjtKJ7PJg