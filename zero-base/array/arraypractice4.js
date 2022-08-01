const a = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] + 100 === arr.reduce((val, acc) => val + acc)) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return arr;
      }
    }
  }
};
const input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
