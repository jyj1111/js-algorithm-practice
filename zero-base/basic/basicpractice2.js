/*const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");*/

const a = (start, end) => {
  let result = [];
  if (start >= end) {
    [start, end] = [end, start];
  }
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const input = [
  [3, 7],
  [8, 3],
  [12, 10],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j][0], input[j][1])}`);
}
