//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(l, start, end) {
  let dx = [1, 2, 2, 1, -1, -2, -2, -1];
  let dy = [2, 1, -1, -2, -2, -1, 1, 2];
  let ch = Array.from(Array(l), () => Array(l).fill(0));
  let dis = Array.from(Array(l), () => Array(l).fill(0));
  ch[start[0]][start[1]] = 1;
  let queue = [];
  queue.push([start[0], start[1]]);
  while (queue.length) {
    let [x, y] = queue.shift();
    if (x === end[0] && y === end[1]) {
      return dis[x][y];
    }
    for (let i = 0; i < 8; i++) {
      x1 = x + dx[i];
      y1 = y + dy[i];
      if (
        0 <= x1 &&
        x1 <= l - 1 &&
        0 <= y1 &&
        y1 <= l - 1 &&
        ch[x1][y1] === 0
      ) {
        ch[x1][y1] = 1;
        dis[x1][y1] = dis[x][y] + 1;
        queue.push([x1, y1]);
      }
    }
  }
}

/*let n = Number(input[0]);
for(let i=1;i<=3*n;i+=3){
  let l=Number(input[i]);
  let start=input[i+1].split(' ').map(item=>Number(item));
  let end=input[i+2].split(' ').map(item=>Number(item));
  console.log(sol(l, start,end));
}
*/

console.log(sol(8, [0, 0], [7, 0]));
console.log(sol(100, [0, 0], [30, 50]));
console.log(sol(10, [1, 1], [1, 1]));
