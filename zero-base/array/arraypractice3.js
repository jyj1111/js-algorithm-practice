const a = (arr) => {
  let result = [];
  let asc = (x, y) => x - y;
  arr.sort(asc);

  result.push(arr[arr.length - 1]);
  result.push(arr[arr.length - 2]);
  return result;
};
const input = [
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];
for (let j = 0; j < input.length; j++) {
  console.log(`#${j + 1} ${a(input[j])}`);
}
