function sol(num, arr) {
  arr.unshift(0);
  const sum = 0;
  for (let i = 1; i < num + 1; i++) {
    if (arr[i] === 1 && arr[i - 1] >= 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr.reduce((val, acc) => val + acc);
}

console.log(sol(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
