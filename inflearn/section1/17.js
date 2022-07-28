function sol(num, arr) {
  const arr1 = [];
  const set = new Set(arr);

  for (let item of set) {
    arr1.push(item);
  }
  return arr1;
}

const arr = ["good", "time", "good", "time", "student"];
console.log(sol(arr.length, arr));
