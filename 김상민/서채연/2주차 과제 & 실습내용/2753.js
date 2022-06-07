//윤년

let input = require('fs').readFileSync('/dev/stdin').toString();

let year = Number(input);

if (((year%4) == 0) && ((year%100) != 0)) {
    console.log('1');
}
else if ((year%400) == 0) {
    console.log('1');
}
else {
    console.log('0');
}