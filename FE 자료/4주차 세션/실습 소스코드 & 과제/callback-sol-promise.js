// Promise 사용해 회원 여부 기능 구현
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ssu' && password === 'likelion') ||
                    (id === 'front' && password === 'good')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found - no member'));
                }
            }, 1000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'front') {
                    resolve({name: 'front', role: 'developer'});
                } else if (user === 'ssu') {
                    resolve({name: 'ssu', role: 'university'});
                } else {
                    reject(new Error('not found - no developer'));
                }
            }, 1000);
        });
    }
}

// 1. user 생성
const member = new UserStorage();

// 2. id와 password 입력받기
const input_id = prompt("id를 입력해주세요");
const input_pw = prompt("패스워드를 입력해주세요");

// 3. 로그인하기
member.loginUser(input_id, input_pw)
    .then(login_success_id => member.getRoles(login_success_id)) // .then(member.getRoles)
    .then(success_id_role => alert(`${success_id_role.name}'s role is ${success_id_role.role}`))
    .catch(console.log)


// 3. 로그인하기
// member.loginUser(
//     input_id, // 입력받은 id
//     input_pw, // 입력받은 password
//     (login_success_id) => { // login_success에 넣을 콜백함수

//         member.getRoles( // getRoles 함수 호출
//             login_success_id, // loginUser 메소드에서 getRoles로 보낸 id
//             (success_id_role) => { // role_success에 넣을 콜백함수
//                 alert(`${success_id_role.name}'s role is ${success_id_role.role}`);
//             },
//             (role_error) => { // role_error에 넣을 콜백함수
//                 console.log(role_error);
//             }
//         )},
//     (user_error) => { // login_error에 넣을 콜백함수
//         console.log(user_error);
//     }
// );