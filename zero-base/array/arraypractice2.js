const a = (arr) => {
  let result = [1, 1, 2, 2, 2, 8];
  for (let i = 0; i < arr.length; i++) {
    result[i] -= arr[i];
  }

  return result;
};
const input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
