function sol(num, arr) {
  const arr1 = arr.filter((item, idx) => Math.max(...arr.slice(0, idx)) < item);

  return arr1.length;
}

console.log(sol(8, [130, 135, 148, 140, 145, 150, 150, 153]));
