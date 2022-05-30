class UserStorage {
    //로그인 함수
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "hyomin" && password === "1234") ||
                    (id === "front" && password === "likelion") ||
                    (id.includes("ssu") && password === "ssu")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("you are not our user"));
                }
            }, 1000);
        });
    }

    //직책 검색 함수
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "hyomin") {
                    resolve({ name: "hyomin", role: "developer" });
                } else if (user === "front") {
                    resolve({ name: "front", role: "group" });
                } else if (user.includes("ssu")) {
                    resolve({ name: user, role: "student" });
                } else {
                    reject(new Error("none Role"));
                }
            }, 1000);
        });
    }
}

//1.user 생성
const member = new UserStorage();

//2.아이디와 pw 받기
const $id = prompt("아이디를 입력해주세요");
const $pw = prompt("비밀번호 입력해주세요");

//3. 로그인 -> 직책찾기
//promise 사용

member
    .loginUser($id, $pw)
    .then((user) => member.getRoles(user))
    .then((result) => alert(`${result.name}'s role is ${result.role}`))
    .catch(console.log);
