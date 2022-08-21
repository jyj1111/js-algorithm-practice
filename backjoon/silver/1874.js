const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, arr) {
  let stack = [];
  let count = 1;
  let answer = "";
  for (let i = 0; i < n; i++) {
    const number = arr.shift();
    while (count <= number) {
      stack.push(count++);
      answer += "+";
    }
    const popeditem = stack.pop();
    if (popeditem !== number) {
      return "NO";
    }
    answer += "-";
  }
  return answer.split("").join("\n");
}
let n = input[0];
n = +n;
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}
console.log(sol(n, arr));
