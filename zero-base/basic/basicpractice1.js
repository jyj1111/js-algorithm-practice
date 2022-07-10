/*const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");*/
let input = [5, 7, 12];

const a = function (num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }
  return result;
};

for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
