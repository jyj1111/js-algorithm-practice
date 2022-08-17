/*
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");*/

function sol(n, arr) {
  let arr1 = [];
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        cnt++;
      }
    }
    arr1.push(cnt);
  }
  for (let k = 0; k < n; k++) {}
  return arr1;
}
/*const n = input[0];
let arr = input[1].split(" ");
arr = arr.map((item) => +item);*/

console.log(sol(+7, [1, 1, 2, 3, 4, 2, 1]));
