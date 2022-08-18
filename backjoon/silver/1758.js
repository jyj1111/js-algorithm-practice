const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, arr) {
  let answer = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    let item = arr[i] - i;
    if (item > 0) {
      answer += item;
    }
  }
  return answer;
}
let n = input[0];
n = +n;
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}
console.log(sol(n, arr));
