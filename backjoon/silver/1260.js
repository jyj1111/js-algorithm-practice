//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function BFS(n, arr, start) {
  let answer = "";
  let ch = Array(n + 1).fill(0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let queue = [];
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  queue.push(start);
  ch[start] = 1;
  while (queue.length) {
    let item = queue.shift();
    answer += item.toString() + " ";
    for (let i = 1; i <= n; i++) {
      if (graph[item][i] === 1 && ch[i] === 0) {
        ch[i] = 1;
        queue.push(i);
      }
    }
  }
  return answer.trimEnd();
}

function DFS(n, arr, start) {
  let answer = "";
  let ch = Array(n + 1).fill(0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
}
/*let [n,m,start] = input[0].split(' ').map((item)=>Number(item));

const arr = [];
for (let i = 1; i <= m; i++) {
  let [x,y]=input[i].split(' ').map((item)=>Number(item));
  arr.push([x,y]);
}
console.log(DFS(n, arr,start));
console.log(BFS(n, arr,start)); */
console.log(
  DFS(
    4,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 4],
      [3, 4],
    ],
    1
  )
);
console.log(
  BFS(
    4,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 4],
      [3, 4],
    ],
    1
  )
);
