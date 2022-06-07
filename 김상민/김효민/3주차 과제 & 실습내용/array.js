// Q1. 아래 배열을 string으로 변환해 출력해주세요.
{
    const fruits = ["apple", "banana", "orange"];
    console.log(`A1 join : ${fruits.join(" ")}`);
}

// Q2. 아래 String을 배열로 변환해 출력해주세요.
{
    const fruits = "apple, kiwi, banana, cherry";
    const array = fruits.split(",");
    console.log(`A2 split : ${array}`);
}

// Q3. 배열의 순서를 거꾸로 만들어 출력해주세요. : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(`A3 reverse : ${array.reverse()}`);
}

// Q4. 아래의 배열에서 가장 첫 요소 2개를 제외한 배열을 "새롭게 만들어" 출력해주세요. : [3, 4, 5]
{
    const array = [1, 2, 3, 4, 5];
    const newArray = array.slice(2);
    console.log(`A4 slice : ${newArray}`);
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
{
    console.log(`A5 forEach `);
    students.forEach((i) => {
        if (i.score >= 90) console.log(i);
    });
    //break 불가능

    console.log(`A5 for..of `);
    for (let student of students) {
        if (student.score >= 90) console.log(student);
    }
    //break 가능
}

// Q6. 수업에 등록한 학생 모두를 찾아 출력해주세요. (enrolled : true)
{
    console.log(`A6 filter : ${students.filter((i) => i.enrolled)}`);
}

// Q7. 학생들의 점수만을 추출해 배열을 만들어 출력해주세요. : [45, 80, 90, 66, 88]
{
    console.log(`A7 map : ${students.map((i) => i.score)}`);
}

// Q8. 학생 중 score가 50점보다 낮은 학생이 있는지 그 여부를 확인해 출력해주세요.
{
    const checkFind = students.find((i) => i.score < 50) ? true : false;
    const checkSome = students.some((i) => i.score < 50);
    console.log(`A8 find : ${checkFind}`);
    console.log(`A8 some : ${checkSome}`);

    // filter vs find :  find는 요구 에 부 합 된 대상 을 찾 으 면 찾 지 않 는 다
}

// Q9. 학생들의 score의 평균 값을 구해 출력해주세요.
{
    let sum = 0;
    const result =
        students.reduce((prev, cur) => {
            return prev + cur.score;
        }, 0) / students.length;
    console.log(`A9 reduce : ${result}`);
}

// Q10. 모든 학생의 점수를 string으로 변환해 출력해주세요. : '45, 80, 90, 66, 88'
{
    const score = students.map((i) => i.score);
    console.log(`A10 map&join : ${score.join()}`);
}

// Q11. 학생들의 점수를 오름차순으로 정렬해 String으로 출력해주세요. : '45, 66, 80, 88, 90'
{
    const scoreASC = students
        .map((i) => i.score)
        .sort(function (a, b) {
            return b - a;
        });
    const scoreDESC = students
        .map((i) => i.score)
        .sort(function (a, b) {
            return a - b;
        });
    console.log(`A11 ASC: ${scoreASC.join()}`);
    console.log(`A11 DESC: ${scoreDESC.join()}`);
}

// 퀴즈 코드 제공 : https://www.youtube.com/watch?v=3CUjtKJ7PJg
