//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, m, arr) {
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  return answer;
}

/*let n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
  const item = input[i].split("").map((item) => Number(item));
  arr.push(item);
}
console.log(sol(n, arr));*/
console.log(
  sol(7, [
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0],
  ])
);
