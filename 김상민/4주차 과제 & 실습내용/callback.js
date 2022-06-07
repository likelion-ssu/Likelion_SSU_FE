// promise 없이 구현

// 회원 정보 -> 로그인(id & pw) & 이사람의 직책 (role)
class UserStorage {
  //로그인 함수 - producer
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "jimin" && password === "1234") ||
          (id === "front" && password == "likelion")
        ) {
          resolve(id);
        } else {
          reject(new Error("you are not my user"));
        }
      }, 1000);
    });
  }
  // 직책 검색 -producer
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "jimin") {
          resolve({ name: "jimin", role: "developer" });
        } else if (user === "front") {
          reject({ name: "front", role: "god" });
        } else {
          role_error(new Error("너는 직책이 없다."));
        }
      }, 1000);
    });
  }
}

//1. user 생성
const member = new UserStorage();

//2. id & pw 입력 받기
const input_id = prompt("아이디를 입력해주세요");
const input_pw = prompt("비밀번호를 입력해주세요");

// 3. 로그인 -> 직책 찾기
member
  .loginUser(input_id, input_pw)
  // 3-1 로그인 -> 직책 확인
  .then(member.getRoles)
  // 3-2 이름 & 직책 출력
  .then((user) => alert(`${id.name}'s role is ${id.role}`))
  // 3-3 에러 처리
  .catch(console.log);
// member.loginUser(
//   input_id,
//   input_pw,
//   (login_success_id) => {
//     //login)_success에 넣을 콜백함수
//     member.getRoles(
//       login_success_id,
//       (success_id_role) => {
//         alert(`${success_id_role.name}'s role is ${success_id_role.role}`);
//       },
//       (role_error) => {
//         console.log(role_error);
//       }
//     );
//   },
//   (user_error) => {
//     console.log(user_error);
//   }
// );

{
  const promise = new Promise((resolve, reject) => {});

  promise
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("finally is executed!"));
}
