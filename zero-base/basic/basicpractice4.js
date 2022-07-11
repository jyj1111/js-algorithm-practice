const a = (arr) => {
  let result = 0;
  result = arr.indexOf(Math.max(...arr)) + 1;

  return result;
};
const input = [
  [3, 7, 9, 6, 1],
  [2, 7, 1, 4, 3, 0, 5],
  [7, 5, 0, 1, 2, 12, 6],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
