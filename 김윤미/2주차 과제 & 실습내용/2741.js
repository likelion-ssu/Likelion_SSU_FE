// 2741.
const input=require('fs').readFileSync('/dev/stdin').toString();
const num=parseInt(input);
let ans="";
for(let i=1;i<=num;i++){
    ans+=i+"\n";
}
console.log(ans);