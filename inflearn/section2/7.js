function sol(num, arr) {
  let count = 0;
  dx = [1, 0, -1, 0];
  dy = [0, 1, 0, -1];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let arr1 = [];
      for (let k = 0; k < 4; k++) {
        let x = i + dx[k];
        let y = j + dy[k];
        if (0 <= x && x < num && 0 <= y && y < num) {
          arr1.push(arr[x][y]);
        }
      }
      if (arr[i][j] > Math.max(...arr1)) {
        count++;
      }
    }
  }
  return count;
}

console.log(
  sol(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
