const a = (num) => {
  let s = "\n";
  for (let i = 0; i < num; i++) {
    for (let k = i; k < num - 1; k++) {
      s += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      s += "*";
    }

    s += "\n";
  }
  return s;
};
const input = [3, 5, 7];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
