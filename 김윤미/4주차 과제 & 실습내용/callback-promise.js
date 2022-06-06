// 1. 콜백지옥 코드
class UserStorage{
    loginUser(id,password){
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                if(
                    (id === 'youm' && password === '1234')||
                    (id === 'front' && password === 'likelion')
                ){
                    resolve(id);
                }else {
                    reject(new Error('you are not our user'));
                }
            },1000);
        })

    }
    //직책 검색-promise
    getRoles(user){
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                if(user === 'youm'){
                    resolve({name:'youm', role: 'developer'})
                }else if(user === 'front'){
                    resolve({name: 'front', role: 'god'})
                }else{
                    reject(new Error('너는 직책이 없다'))
                }
            },2000);
        })

    }
    
    // getRoles(user,role_sucess, role_error){
    //     setTimeout(() => {
    //         if(user === 'youm'){
    //             role_sucess({name:'youm', role: 'developer'})
    //         }else if(user === 'front'){
    //             role_sucess({name: 'front', role: 'god'})
    //         }else{
    //             role_error(new Error('너는 직책이 없다'))
    //         }
    //     },2000);
    // }
}
const member = new UserStorage(); //1. user 생성
//2. id&pw 입력 받기
const input_id =prompt('아이디를 입력해주세요');
const input_pw =promt('비밀번호를 입력해주세요');
//3. 로그인 -> 직책 찾기
 member.loginUser(input_id,input_pw)

  .then(member.getRoles)
  .then((user) => alert(`$(user.name)'s role is ${user.role}`))
  .catch(console.log)


//  member.loginUser(
//     input_id,
//     input_pw,
//     (login_success_id) => {//로그인_success넣을 콜백함수
//         member.getRoles(
//             login_success_id,
//             (success_id_role) => {
//                 alert(`${success_id_role.names}'s role is ${success_id_role.role}` )
//             },
//             (role_error) => {
//                 console.log(role_error);
//             }
//         )
//     },
//     (user_error) => {
//         console.log(user_error);
//     }
// )
