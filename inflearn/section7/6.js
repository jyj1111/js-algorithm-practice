function sol(n, arr) {
  let arr1 = [...arr];
  arr.sort((a, b) => a - b);
  let arr2 = arr1.filter((item, idx) => item !== arr[idx]);

  return [arr1.indexOf(arr2[0]) + 1, arr1.indexOf(arr2[1]) + 1];
}
console.log(sol(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
