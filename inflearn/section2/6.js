function sol(num, arr) {
  const arr1 = [];
  for (let i = 0; i < num; i++) {
    let mainsum = 0;
    let crosssum = 0;
    for (let j = 0; j < num; j++) {
      mainsum += arr[i][j];
      crosssum += arr[j][i];
    }
    arr1.push(mainsum);
    arr1.push(crosssum);
  }
  let diasum = 0;
  let rdiasum = 0;
  for (let i = 0; i < num; i++) {
    diasum += arr[i][i];
    rdiasum += arr[i][num - 1 - i];
  }
  arr1.push(diasum);
  arr1.push(rdiasum);
  return Math.max(...arr1);
}

console.log(
  sol(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
