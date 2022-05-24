// Promise 사용 없이 회원 여부 기능 구현 - callback
class UserStorage {
    loginUser(id, password, login_success, login_error) {
        setTimeout(() => {
            if (
                (id === 'ssu' && password === 'likelion') ||
                (id === 'front' && password === 'good')
            ) {
                login_success(id);
            } else {
                login_error(new Error('not found - no member'));
            }
        }, 1000);
    }

    getRoles(user, role_success, role_error) {
        setTimeout(() => {
            if (user === 'front') {
                role_success({name: 'front', role: 'developer'});
            } else if (user === 'ssu') {
                role_success({name: 'ssu', role: 'university'});
            } else {
                role_error(new Error('not found - no developer'));
            }
        }, 1000);
    }
}

// 1. user 생성
const member = new UserStorage();

// 2. id와 password 입력받기
const input_id = prompt("id를 입력해주세요");
const input_pw = prompt("패스워드를 입력해주세요");

// 3. 로그인하기
member.loginUser(
    input_id, // 입력받은 id
    input_pw, // 입력받은 password
    (login_success_id) => { // login_success에 넣을 콜백함수

        member.getRoles( // getRoles 함수 호출
            login_success_id, // loginUser 메소드에서 getRoles로 보낸 id
            (success_id_role) => { // role_success에 넣을 콜백함수
                alert(`${success_id_role.name}'s role is ${success_id_role.role}`);
            },
            (role_error) => { // role_error에 넣을 콜백함수
                console.log(role_error);
            }
        )},
    (user_error) => { // login_error에 넣을 콜백함수
        console.log(user_error);
    }
);