function sol(num, arr) {
  arr.unshift(Number.MIN_SAFE_INTEGER);
  const arr1 = arr.filter((item, idx) => item > arr[idx - 1]);
  return arr1;
}

console.log(sol(6, [7, 3, 9, 5, 6, 12]));
