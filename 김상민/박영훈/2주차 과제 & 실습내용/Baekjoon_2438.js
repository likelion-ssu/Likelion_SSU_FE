const input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer ='';


for (let i = 0; i<input; i++){
    for(let j = 0; j<i+1; j++){
        answer += '*';
    }
    answer += '\n';
}

console.log(answer);