const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
function sol(n, arr) {
  let answer = Array(n).fill(-1);
  let stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      let idx = stack.pop();
      answer[idx] = arr[i];
    }
    stack.push(i);
  }

  return answer.join(" ");
}

let arr = input[1].split(" ").map((item) => +item);

console.log(sol(+input[0], arr));

//console.log(sol(4, [3, 5, 2, 7]));
//console.log(sol(4, [9, 5, 4, 8]));
