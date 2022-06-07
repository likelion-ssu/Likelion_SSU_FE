// promise 없이 구현
//회원 정보 -> 로그인(id, password) & 이 사람의 직책(role)

class UserStorage {
    loginUser(id, password, login_success, login_error) {
        setTimeout(() => {
            if (
                (id === 'chaeyeon' && password === '1234') ||
                (id === 'front' && password === 'likelion')
            ) {
                login_success(id);
            } else {
                login_error(new Error('you are not our user'));
            }
        }, 1000);
    }

    getRoles(user, role_success, role_error) {
        setTimeout(() => {
            if (user === 'chaeyeon') {
                role_success({name: 'chaeyeon', role: 'developer'});
            } else if (user === 'front') {
                role_success({name: 'front', role: 'god'});
            } else {
                role_error(new Error('너는 직책이 없다'));
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
    input_id,
    input_pw,
    (login_success_id) => { // login_success 넣을 콜백 함수
        member.getRoles(
            (login_success_id,
                (success_id_role) => {
                    alert(`${success_id_role.name}'s role is ${success_id_role.role}`);
                },
                (role_error) => {
                    console.log(role_error);
                }
            )
        )
    },
    (user_error) => {
        console.log(user_error);
    }
)