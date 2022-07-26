function h(a, b, c, d, e, f, g) {
  const arr = new Array(a, b, c, d, e, f, g);
  const oddarr = arr.filter((item) => item % 2 === 1);
  const min = Math.min(...oddarr);
  const oddhap = oddarr.reduce((acc, value) => acc + value, 0);
  return [oddhap, min];
}

console.log(h(12, 77, 38, 41, 53, 92, 85)[0]);
console.log(h(12, 77, 38, 41, 53, 92, 85)[1]);
