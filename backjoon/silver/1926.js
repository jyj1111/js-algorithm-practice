//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, m, arr) {
  let checked = Array.from({ length: n }, () => Array(m).fill(0));
  let dy = [1, 0, -1, 0];
  let dx = [0, 1, 0, -1];
  let queue = [];
  let num = 0;
  let max_width = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1 && checked[i][j] === 0) {
        queue.push([i, j]);
        checked[i][j] = 1;

        num++;
      }
      let width = 0;
      while (queue.length) {
        width++;
        let [x, y] = queue.shift();

        for (let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];
          if (
            0 <= nx &&
            nx < n &&
            0 <= ny &&
            ny < m &&
            arr[nx][ny] === 1 &&
            checked[nx][ny] === 0
          ) {
            checked[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }

      max_width = Math.max(max_width, width);
    }
  }
  return num + "\n" + max_width;
}

/*let [n,m] = input[0].split(' ').map((item)=>Number(item));
let arr=[];
for(let i=1;i<=n;i++){
  let arr1=input[i].split(' ').map((item)=>Number(item));
  arr.push(arr1);
}
console.log(sol(n,m,arr));
*/

console.log(
  sol(6, 5, [
    [1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
  ])
);
