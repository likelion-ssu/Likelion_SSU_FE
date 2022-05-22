// 10818
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
const nums = input[1].split(' ').map(Number);

let max = nums[0];
let min = nums[0];

for(let i=0; i<count; i++){
    if(max<nums[i]) 
        max = nums[i];
    if(min>nums[i]) 
        min = nums[i];
}
console.log(min,max);
