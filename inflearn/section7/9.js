function sol(n, arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let max = 1;
  for (let i = 0; i < n - 1; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i][1] > arr[j][0]) {
        count++;
      } else {
        break;
      }
    }
    max = Math.max(max, count);
  }

  return max;
}
console.log(
  sol(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
