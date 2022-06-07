//콜백버전
class UserStorage {
  loginUser(id, password, resolve, reject) {
    setTimeout(() => {
      if (
        (id === "junkyu" && password === "1234") ||
        (id === "front" && password === "1234")
      ) {
        resolve(id);
      } else {
        reject(new Error("탈락^^"));
      }
    }, 1000);
  }

  getRoles(user, resolve, reject) {
    setTimeout(() => {
      if (user === "junkyu") {
        resolve({ name: "junkyu", role: "developer" });
      } else if (user === "front") {
        resolve({ name: "front", role: "god" });
      } else {
        reject(new Error("백수"));
      }
    }, 1000);
  }
}

//유저 생성
const member = new UserStorage();

//아이디와 패스워드 입력받기
const input_id = prompt("아이디 입력하셈");
const input_pw = prompt("비번 입력하셈");

// 로그인하고 성공하면 직책찾기
member.loginUser(
  input_id,
  input_pw,
  (login_success_id) => {
    //로그인 success에 넣을 콜백함수
    member.getRoles(login_success_id, (success_id_role) => {
      alert(`${success_id_role.name}의 role은 ${success_id_role.role}입니다`),
        (role_error) => {
          console.log(role_error);
        };
    });
  },
  (user_error) => {
    console.log(user_error);
  }
);
