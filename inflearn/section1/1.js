function min(a, b, c) {
  let min = a;
  if (a > b) {
    min = b;
  }
  if (min > c) {
    min = c;
  }
  return min;
}

console.log(min(6, 5, 11));
