/*const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().split("\n");*/

function sol(n, arr) {
  let answer = 1;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let end = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= end) {
      answer++;
      end = arr[i][1];
    }
  }
  return answer;
}

console.log(
  sol(11, [
    [1, 4],
    [3, 5],
    [0, 6],
    [5, 7],
    [3, 8],
    [5, 9],
    [6, 10],
    [8, 11],
    [8, 12],
    [2, 13],
    [12, 14],
  ])
);
//console.log(sol(input[0],[...input[1]]);
