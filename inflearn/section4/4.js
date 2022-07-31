function sol(n, m, arr) {
  let arr1 = arr.map((item) => item[0] / 2 + item[1]);
  let arr2 = arr.map((item) => item[0] + item[1]);
  let count = 1;
  for (let i = 0; i < n; i++) {
    let sum = arr1[i];
    let num = 1;
    let arr3 = [...arr2];
    arr3.splice(i, 1);
    arr3.sort((a, b) => a - b);
    for (let item of arr3) {
      sum += item;
      if (sum <= m) {
        num++;
      } else {
        break;
      }
    }
    count = Math.max(count, num);
  }
  return count;
}

console.log(
  sol(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
