function sol(num, arr) {
  const arr1 = arr.map((item) => item % 10);
  const arr2 = arr1.filter((item) => item === num);
  return arr2.length;
}

console.log(sol(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(sol(0, [12, 20, 54, 30, 87, 91, 30]));
