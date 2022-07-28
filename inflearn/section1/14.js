function sol(num, arr) {
  const arr1 = arr.map((item) => item.length);
  const idx = arr1.indexOf(Math.max(...arr1));
  return arr[idx];
}
const arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(sol(arr.length, arr));
