function sol(s, n, arr) {
  let arr1 = [];
  for (let i = 0; i < n; i++) {
    if (arr1.includes(arr[i])) {
      arr1.splice(arr1.indexOf(arr[i]), 1);
    }

    if (arr1.length === s) {
      arr1.pop();
    }
    arr1.unshift(arr[i]);
    console.log(arr1);
  }
  return arr1;
}
console.log(sol(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
