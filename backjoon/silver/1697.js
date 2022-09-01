//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n, k) {
  let ch = Array(100001).fill(0);
  let dis = Array(100001).fill(0);
  ch[n] = 1;
  let queue = [];
  queue.push(n);
  while (queue.length) {
    let x = queue.shift();
    if (x === k) {
      return dis[x];
    }
    for (let item of [x - 1, x + 1, 2 * x]) {
      if (ch[item] === 0) {
        queue.push(item);
        ch[item] = 1;
        dis[item] = dis[x] + 1;
      }
    }
  }
}

/*let [n, k] = input[0].split(" ").map((item) => Number(item));
console.log(sol(n, k));*/

console.log(sol(5, 17));
