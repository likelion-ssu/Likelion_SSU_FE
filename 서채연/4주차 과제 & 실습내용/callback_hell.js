// promise 없이 구현
//회원 정보 -> 로그인(id, password) & 이 사람의 직책(role)

class user {
    // 로그인 함수 - Producer
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'chaeyeon' && password === '1234') ||
                    (id === 'front' && password === 'likelion')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('you are not our user'));
                }
            }, 1000);
        })
    }
    
    // 직책 검색 - Producer
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'chaeyeon') {
                    resolve({name: 'chaeyeon', role: 'developer'})
                } else if (user === 'front') {
                    resolve({name: 'front', role: 'god'})
                } else {
                    reject(new Error('너는 직책이 없다'))
                }
            }, 2000);
        })
    }
}

// user 생성
const member = new user();


// id와 pw 입력받기
const input_id = prompt('id를 입력해주세요');
const input_pw = prompt('비밀번호를 입력해주세요');


// 로그인 -> 직책 찾기
member.loginUser(input_id, input_pw)

// - 로그인 -> 직책 확인
    .then(member.getRoles)

// - 이름 & 직책 출력
    .then((user) => alert(`${user.name}'s role is ${user.role}`))

    // 에러 처리
    .catch(console.log)

/*member.loginUser(
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
*/