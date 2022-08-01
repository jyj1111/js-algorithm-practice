const a = (arr, hap) => {
  let arr1;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === hap) {
        arr1 = [i, j];
        return arr1;
      }
    }
  }
};
const input1 = [
  [2, 7, 11, 15],
  [3, 2, 4],
  [3, 3],
];
const input2 = [9, 6, 6];
for (let j = 0; j < input1.length; j++) {
  console.log(`#${j + 1} ${a(input1[j], input2[j])}`);
}
