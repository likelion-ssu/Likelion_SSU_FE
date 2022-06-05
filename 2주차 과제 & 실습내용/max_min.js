let numberPrompt = prompt("number")

const [...arr] = numberPrompt.toString().trim().split(' ');

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`)

const numArr = [Number(...arr)]

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`) 

const parseArr = [parseInt(...arr)]

console.log(`${Math.min(...parseArr)} ${Math.max(...parseArr)}`) 


