function bfscount(x, arr, n) {
  var count = 1;
  var ch = Array(n + 1).fill(0);
  var queue = [];
  queue.push(x);
  ch[x] = 1;
  while (queue.length) {
    var y = queue.shift();
    for (let k of arr) {
      if (k.includes(y)) {
        var idx = 1 - k.indexOf(y);
        if (!ch[k[idx]]) {
          ch[k[idx]] = 1;
          queue.push(k[idx]);
          count++;
        }
      }
    }
  }
  return count;
}

function solution(n, wires) {
  var answer = n;
  for (let i = 0; i < n - 1; i++) {
    let copy = wires.slice();
    let [x1, x2] = copy.splice(i, 1)[0];

    answer = Math.min(
      answer,
      Math.abs(bfscount(x1, copy, n) - bfscount(x2, copy, n))
    );
  }

  return answer;
}
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
