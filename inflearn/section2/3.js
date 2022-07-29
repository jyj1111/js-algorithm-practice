function sol(num, arr1, arr2) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    if (arr1[i] === 2 && arr2[i] === 1) {
      arr.push("A");
    } else if (arr1[i] === 3 && arr2[i] === 2) {
      arr.push("A");
    } else if (arr1[i] === 1 && arr2[i] === 3) {
      arr.push("A");
    } else if (arr1[i] === arr2[i]) {
      arr.push("D");
    } else {
      arr.push("B");
    }
  }

  return arr;
}

console.log(sol(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
