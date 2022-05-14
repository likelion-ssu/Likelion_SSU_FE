const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = "";

rl.on("line", function (line) {
  input = line;
  const num = Number(input);

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
  }

  console.log(answer);
  rl.close();
}).on("close", function () {
  process.exit();
});
