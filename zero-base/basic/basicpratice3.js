const a = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] / arr.length;
  }
  return result.toFixed(2);
};
const input = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
