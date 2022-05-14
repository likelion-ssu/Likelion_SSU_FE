const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let n = 0;
let input = [];

rl.on("line", function (x) {
  count += 1;

  input.push(x);
  n = parseInt(input[0]);

  if (count === 2) {
    rl.close();
  }
}).on("close", function () {
  let array = input[1].split(" ");
  let min = parseInt(array[0]);
  let max = parseInt(array[0]);
  for (var i = 0; i < n; i++) {
    if (min >= parseInt(array[i])) min = array[i];
    if (max <= parseInt(array[i])) max = array[i];
  }
  console.log(array.min());
  console.log(min + " " + max);
  process.exit();
});
