class UserStorage {
    //로그인 함수
    loginUser(id, password, login_success, login_error) {
        setTimeout(() => {
            if (
                (id === "hyomin" && password === "1234") ||
                (id === "front" && password === "likelion") ||
                (id.includes("ssu") && password === "ssu")
            ) {
                login_success(id);
            } else {
                login_error(new Error("you are not our user"));
            }
        }, 1000);
    }

    //직책 검색 함수
    getRoles(user, role_success, role_error) {
        setTimeout(() => {
            if (user === "hyomin") {
                role_success({ name: "hyomin", role: "developer" });
            } else if (user === "front") {
                role_success({ name: "front", role: "group" });
            } else if (user.includes("ssu")) {
                role_success({ name: user, role: "student" });
            } else {
                role_error(new Error("none Role"));
            }
        }, 1000);
    }
}

//1.user 생성
const member = new UserStorage();

//2.아이디와 pw 받기
const $id = prompt("아이디를 입력해주세요");
const $pw = prompt("비밀번호 입력해주세요");

//3. 로그인 -> 직책찾기

member.loginUser(
    $id,
    $pw,
    (login_success_id) => {
        //callback 함수
        member.getRoles(
            login_success_id,
            (success_id_role) => {
                alert(
                    `${success_id_role.name}'s role is ${success_id_role.role}`
                );
            },
            (role_error) => {
                console.log(role_error);
            }
        );
    },
    (user_error) => {
        console.log(user_error);
    }
);
