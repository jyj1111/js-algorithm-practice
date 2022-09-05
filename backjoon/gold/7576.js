//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(m, n, arr) {
  let checked = Array.from({ length: n }, () => Array(m).fill(0));
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1 && checked[i][j] === 0) {
        queue.push([i, j]);
        checked[i][j] = 1;
        arr[i][j] = 0;
      }
    }
  }
  while (queue.length) {
    let [y, x] = queue.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (
        0 <= nx &&
        nx < m &&
        0 <= ny &&
        ny < n &&
        checked[ny][nx] === 0 &&
        arr[ny][nx] !== -1
      ) {
        arr[ny][nx] = arr[y][x] + 1;
        checked[ny][nx] = 1;

        queue.push([ny, nx]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0 && checked[i][j] === 0) {
        return -1;
      }
      max = Math.max(max, arr[i][j]);
    }
  }
  return max;
}

/*let [m,n] = input[0].split(' ').map((item)=>Number(item));
let arr=[];
for(let i=1;i<=n;i++){
  let arr1=input[i].split(' ').map((item)=>Number(item));
  arr.push(arr1);
}
console.log(sol(m,n,arr));
*/

console.log(
  sol(6, 4, [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
  ])
);

console.log(
  sol(6, 4, [
    [0, -1, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
  ])
);

console.log(
  sol(6, 4, [
    [1, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, -1, 0],
    [0, 0, 0, 0, -1, 1],
  ])
);
console.log(
  sol(5, 5, [
    [-1, 1, 0, 0, 0],
    [0, -1, -1, -1, 0],
    [0, -1, -1, -1, 0],
    [0, -1, -1, -1, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  sol(2, 2, [
    [1, -1],
    [-1, 1],
  ])
);
