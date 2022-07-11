const a = (start, end) => {
  let result = [];
  result.push(start);
  result.push(end);
  while (start >= end) {
    [start, end] = [end, start - end];
    result.push(end);
  }

  return result;
};
const input = [
  [9, 3],
  [6, 3],
  [13, 7],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j][0], input[j][1])}`);
}
