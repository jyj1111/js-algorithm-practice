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
  function DFS(v) {
    visited[v] = 1;
    arr1[v - 1] = count++;

    for (let x of graph[v]) {
      if (!visited[x]) {
        DFS(x);
      }
    }
  }
  DFS(v);

  return arr1.join("\n");
}

let [n, m, v] = input[0].split(" ");

const arr = [];
for (let i = 1; i <= m; i++) {
  const item = input[i].split(" ");
  arr.push([+item[0], +item[1]]);
}
console.log(sol(+n, +m, +v, arr));
