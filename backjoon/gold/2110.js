const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
function count(l, arr) {
  let count = 1;
  let end = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - end >= l) {
      count++;
      end = arr[i];
    }
  }
  return count;
}
function sol(n, c, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = Math.max(...arr) - Math.min(...arr);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid, arr) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
const [n, c] = input[0].split(" ");
let arr = [];
for (let i = 1; i <= +n; i++) {
  arr.push(+input[i]);
}

console.log(sol(+n, +c, arr));
