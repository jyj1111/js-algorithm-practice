//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n) {
  let arr = Array(100001).fill(0);
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
  }
  return arr[n];
}

/*
));
console.log(sol(+input[0]));
*/

console.log(sol(10));
