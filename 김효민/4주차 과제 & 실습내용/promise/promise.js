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

const $id = document.getElementById("id");
const $pw = document.getElementById("password");
const $submit = document.getElementById("submit");
const $title = document.getElementById("title");
$submit.addEventListener("click", login);

function login() {
    member
        .loginUser($id.value, $pw.value)
        .then((user) => member.getRoles(user))
        .then((result) => {
            $title.innerText = `Hello ${result.name} 🖐`;
            $id.value = "";
            $pw.value = "";
        })
        .catch((e) => {
            console.log(e);
            $title.innerText = `Retry Login`;
            $id.value = "";
            $pw.value = "";
        });
}

//3. 로그인 -> 직책찾기
//promise 사용
