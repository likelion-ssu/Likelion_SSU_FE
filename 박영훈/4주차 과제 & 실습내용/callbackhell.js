//Promise 없이 구현
//회원 정보 -> 로그인 & 이 사람의 직책(Role)

class UserStorage {
    //Login Func
    // loginUser(id, pw, login_success, login_error){
    //     setTimeout(() => {
    //         if((id === 'hoon' && pw === '1234') || (id === 'beom' && pw === '486')){
    //             login_success(id);
    //         } 
    //         else{
    //             login_error(new Error('User Data Not Found!'));
    //         }
    //     }, 1000);
    // }
 
    //Login Func in Promise
    loginUser(id, pw){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'hoon' && pw === '1234') || (id === 'beom' && pw === '486')){
                    resolve(id);
                } 
                else{
                    reject(new Error('User Data Not Found!'));
                }
            }, 1000);
        }) 
    }

    //Role Func
    // getRoles(user, role_success, role_error){
    //     setTimeout(() => {
    //         if(user === 'hoon'){
    //             role_success({name: 'hoon', role: 'developer'})
    //         }
    //         else if(user === 'beom'){
    //             role_success({name: 'beom', role: 'talker'})
    //         }
    //         else{
    //             role_error(new Error('Role Data Not Found!'))
    //         }
    //     }, 2000);
    // }

    //Role Finding Func in Promise
    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'hoon'){
                    resolve({name: 'hoon', role: 'developer'})
                }
                else if(user === 'beom'){
                    resolve({name: 'beom', role: 'talker'})
                }
                else{
                    reject(new Error('Role Data Not Found!'))
                }
            }, 2000);
        })
    }
}

//1. User 생성
const member = new UserStorage();

//2. ID & PW 입력 받기
const input_id = prompt('아이디를 입력해주세요 : ');
const input_pw = prompt('비밀번호를 입력해주세요 : ');

//3. 로그인 -> 직책 찾기
// member.loginUser(
//     input_id, 
//     input_pw,
//     (login_success_id) => {//login_success에 넣을 Function
//         member.getRoles(
//             login_success_id, 
//             (success_id_role) => {
//                 alert(`${success_id_role.name}'s role is ${success_id_role.role}`)
//             },
//             (role_error) =>{
//                 console.log(role_error);
//             }
//         )
//     },
//     (user_error) => {
//         console.log(user_error);
//     }
// )

//4. Promise로 구현하기
//1 Login
member.loginUser(input_id, input_pw)
//2 Login -> Role
    .then(member.getRoles)
//3 Id, Role out
    .then((user) => alert(`${user.name}'s role is ${user.role}`))
//4 Error
    .catch(console.log)