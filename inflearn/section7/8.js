function sol(n, arr) {
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let count = 1;
  let m = 0;
  for (let i = 1; i < n; i++) {
    if (arr[m][1] <= arr[i][0]) {
      count++;
      m = i;
    }
  }
  return count;
}
console.log(
  sol(5, [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  sol(3, [
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
