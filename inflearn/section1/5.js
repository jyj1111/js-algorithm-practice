function min(a, b, c, d, e, f, g) {
  const arr = new Array(a, b, c, d, e, f, g);
  return Math.min(...arr);
}

console.log(min(5, 3, 7, 11, 2, 15, 17));
