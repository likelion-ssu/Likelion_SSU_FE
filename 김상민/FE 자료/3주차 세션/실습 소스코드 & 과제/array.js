// ========= 배열 ========
const fronts = ['김상민', '김윤미', '김효민', '박영훈', '서채연', '유지민', '이준규', '황순범']

// ==== Looping Array ====
// 1. for
for (let i = 0; i < fronts.length; i++) {
    console.log(fronts[i]);
}

// 2. for of
for (let front of fronts) {
    console.log(front);
}

// 3. forEach
fronts.forEach(function (front, index, array) {
    console.log(front, index, array); // array는 보통 받지 않음
})

// 3-1. forEach - using arrow function
fronts.forEach((front) => console.log(front));

// ==== Addition / Deletion / Copy ====
// 1. push : 배열의 뒤에 요소를 추가
fronts.push('송은주', '계대환', '김윤영'); 

// 2. pop : 배열의 가장 뒤의 요소를 삭제
fronts.pop();
fronts.pop();
fronts.pop();

// 3. unshift : 배열의 앞에 요소를 추가
fronts.unshift('최다인', '이도하', '정승연');

// 4. shift : 배열의 앞의 요소를 삭제
fronts.shift();

console.log("======= splice before ======");
fronts.forEach((front) => console.log(front));

// 5. splice : 원하는 위치의 인덱스 요소를 삭제
fronts.splice(0, 2); // index : 0 부터 2개의 요소 삭제
    // if) fronts.splice(3); → index : 3 이후의 요소 모두 삭제

fronts.splice(2, 3, '프론트', '최고'); 
    // index : 2부터 3개를 지운 후 뒤의 요소들을 해당 위치에 추가

console.log("======= splice after ======");
fronts.forEach((front) => console.log(front));

fronts.splice(2, 2, '김효민', '박영훈', '서채연');
console.log("======= 효민 & 영훈 & 채연 ======");
fronts.forEach((front) => console.log(front));

// 6. concat : 두 배열의 결합
const korean_food = ['김치', '제육볶음', '청국장']
const italian_food = ['파스타', '피자', '스프']

const concat_food = korean_food.concat(italian_food);
console.log(concat_food);

// 7. indexOf : 해당 요소의 인덱스 검색
console.log(fronts.indexOf('유지민')); // 5

// 8. includes : 해당 요소의 존재 여부 확인
console.log(fronts.includes('남주혁')); // false
console.log(fronts.indexOf('서강준')); // -1

// 9. lastIndexOf : 중복 요소가 있을 때, 가장 마지막 인덱스의 위치 출력
console.log(fronts.indexOf('유지민')); // 5
fronts.push('유지민');
console.log(fronts.lastIndexOf('유지민')); // 8

