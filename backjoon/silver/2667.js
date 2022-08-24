//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, m, arr) {
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  let answer = Number.MAX_SAFE_INTEGER;
  let ch = Array.from(Array(n), () => Array(m).fill(0));

  function DFS(x, y, count) {
    if (x === n - 1 && y === m - 1) {
      answer = Math.min(answer, count);
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          0 <= nx &&
          nx <= n - 1 &&
          0 <= ny &&
          ny <= m - 1 &&
          arr[nx][ny] === 1 &&
          ch[nx][ny] === 0
        ) {
          ch[nx][ny] = 1;
          DFS(nx, ny, count + 1);
          ch[nx][ny] = 0;
        }
      }
    }
  }

  ch[0][0] = 1;
  DFS(0, 0, 1);

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
