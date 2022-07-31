function sol(num, arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let item = arr[i];
    while (item > 0) {
      sum += item % 10;
      item = Math.floor(item / 10);
    }
    arr1.push(sum);
  }
  const arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === Math.max(...arr1)) {
      arr2.push(arr[i]);
    }
  }
  return Math.max(...arr2);
}

console.log(sol(7, [128, 460, 603, 40, 521, 137, 123]));
