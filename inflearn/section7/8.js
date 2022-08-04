function sol(n, arr) {
  let count = 0;
  arr.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < n; i++) {
    count = 1;
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
