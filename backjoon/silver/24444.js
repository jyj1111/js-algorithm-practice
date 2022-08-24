const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, m, v, arr) {
  let arr1 = Array.from({ length: n }, () => 0);
  let graph = Array.from({ length: n + 1 }, () => Array());
  let visited = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a].push(b);
    graph[b].push(a);
  }
  for (let x of graph) {
    x.sort((a, b) => a - b);
  }

  let count = 1;
  let queue = [];
  function BFS(v) {
    visited[v] = 1;
    queue.push(v);
    while (queue.length > 0) {
      let item = queue.shift();

      arr1[item - 1] = count++;
      for (let x of graph[item]) {
        if (!visited[x]) {
          visited[x] = 1;
          queue.push(x);
        } else {
          continue;
        }
      }
    }
  }
  BFS(v);

  return arr1.join("\n");
}

let [n, m, v] = input[0].split(" ");

const arr = [];
for (let i = 1; i <= m; i++) {
  const item = input[i].split(" ");
  arr.push([+item[0], +item[1]]);
}
console.log(sol(+n, +m, +v, arr));
