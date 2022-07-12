const a = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Math.min(...arr)) {
      result.push(i);
    }
  }

  return result;
};
const input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [12, 11, 11, 16, 11, 12],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
