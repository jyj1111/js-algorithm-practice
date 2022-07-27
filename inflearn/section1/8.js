function sol(arr) {
  const hap = arr.reduce((acc, val) => acc + val, 0);
  const diff = hap - 100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === diff - arr[i]) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
}

console.log(sol([20, 7, 23, 19, 10, 15, 25, 8, 13]));
