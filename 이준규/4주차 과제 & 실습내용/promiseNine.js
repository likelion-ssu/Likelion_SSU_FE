//프로미스버전
class UserStorage {
  //로그인 함수
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
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
    });
  }

  getRoles(user) {
    //직책 검색
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "junkyu") {
          resolve({ name: "junkyu", role: "developer" });
        } else if (user === "front") {
          resolve({ name: "front", role: "god" });
        } else {
          reject(new Error("백수"));
        }
      }, 1000);
    });
  }
}

//유저 생성
const member = new UserStorage();

//아이디와 패스워드 입력받기
const input_id = prompt("아이디 입력하셈");
const input_pw = prompt("비번 입력하셈");

//promise 버전
member
  .loginUser(input_id, input_pw)
  .then(member.getRoles)
  .then((id) => {
    alert(`${id.name}의 직업은 ${id.role}입니다`);
  })
  .catch(console.log);
