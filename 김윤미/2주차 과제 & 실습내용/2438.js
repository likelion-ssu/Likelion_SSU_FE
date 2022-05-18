// 2438.
const input=require('fs').readFileSync('/dev/stdin').toString().trim();
const num=parseInt(input);
let ans="";
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++)
        ans+="*"+"\n";
}
console.log(ans);
