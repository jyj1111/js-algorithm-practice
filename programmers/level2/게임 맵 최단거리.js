function solution(maps) {
  var n = maps.length;
  var m = maps[0].length;
  var dx = [1, 0, -1, 0];
  var dy = [0, 1, 0, -1];
  var x;
  var y;
  var ch = Array.from(Array(n), () => Array(m).fill(0));
  var dis = Array.from(Array(n), () => Array(m).fill(0));
  var queue = [];
  queue.push([0, 0]);
  dis[0][0] = 1;
  ch[0][0] = 1;
  while (queue.length) {
    console.log(queue);
    [x, y] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      break;
    }
    for (let k = 0; k < 4; k++) {
      var x1 = x + dx[k];
      var y1 = y + dy[k];
      if (
        0 <= x1 &&
        x1 <= n - 1 &&
        0 <= y1 &&
        y1 <= m - 1 &&
        maps[x1][y1] === 1 &&
        ch[x1][y1] === 0
      ) {
        dis[x1][y1] = dis[x][y] + 1;
        ch[x1][y1] = 1;

        queue.push([x1, y1]);
      }
    }
  }
  if (dis[n - 1][m - 1]) {
    return dis[n - 1][m - 1];
  } else {
    return -1;
  }
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
