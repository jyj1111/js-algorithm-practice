function sol(n, k, arr) {
  let arr1 = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let m = j + 1; m < n; m++) {
        arr1.push(arr[i] + arr[j] + arr[m]);
      }
    }
  }
  arr1.sort((a, b) => b - a);
  let set = new Set(arr1);
  arr1 = [...set];
  return arr1[k - 1];
}

console.log(sol(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
