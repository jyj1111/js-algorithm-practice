//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, arr) {
  let point = Array(301).fill(0);
  point[1] = arr[0];
  point[2] = arr[0] + arr[1];
  point[3] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);
  for (let i = 4; i <= n; i++) {
    point[i] = Math.max(
      point[i - 3] + arr[i - 2] + arr[i - 1],
      point[i - 2] + arr[i - 1]
    );
  }
  return point[n];
}
/*let n = input[0];
n = +n;
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}
console.log(sol(n, arr));*/
console.log(sol(6, [10, 20, 15, 25, 10, 20]));
