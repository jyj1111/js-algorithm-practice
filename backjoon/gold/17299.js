const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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
  let arr2 = [];
  for (let k = 0; k < n - 1; k++) {
    let count = 0;
    let set = -1;
    for (let t = k + 1; t < n; t++) {
      if (arr1[t] > arr1[k]) {
        count++;
        set = arr[t];
        break;
      }
    }
    arr2.push(set);
  }
  return arr2;
}
const n = input[0];
let arr = input[1].split(" ");
arr = arr.map((item) => +item);

console.log(sol(+n, arr));
