//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n) {
  let answer = 0;
  let ch = Array.from({ length: n }, () => Array(n).fill(0));

  function DFS(idx) {
    if (idx === n) {
      answer++;
      return;
    } else {
      for (let i = idx; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (!ch[idx][j]) {
            for (let k = idx; k < n; k++) {
              ch[k][j] = 1;
              if (0 <= j + k && j + k < n) {
                ch[k][j + k] = 1;
              }
            }
            console.log(ch);
            DFS(idx + 1);
          }
        }
      }
    }
  }
  DFS(0);

  return answer;
}

//console.log(sol(+input[0]));
console.log(sol(4));
