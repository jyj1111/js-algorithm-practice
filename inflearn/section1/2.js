function triangle(a, b, c) {
  const arr = [a, b, c];
  const max = Math.max(...arr);
  const hap = a + b + c;
  if (hap - max > max) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(triangle(6, 7, 11));
console.log(triangle(13, 33, 17));
