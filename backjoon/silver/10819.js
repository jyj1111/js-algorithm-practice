//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, arr) {
  let checked = Array(n).fill(0);
  let arr1 = [];
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(idx, sum) {
    console.log(idx, sum);
    if (idx === n) {
      answer = Math.max(answer, sum);
    } else {
      for (let i = 0; i < n; i++) {
        if (!checked[i]) {
          checked[i] = 1;
          DFS(idx + 1, sum + Math.abs(arr[i] - arr[i + 1]));
          checked[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}

/*let n = Number(input[0]);
let arr=input[1].split(' ').map((item)=>Number(item));
console.log(sol(n,arr));
*/

console.log(sol(6, [20, 1, 15, 8, 4, 10]));
