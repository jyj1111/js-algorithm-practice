function solution(n, a, b) {
  var min = Math.min(a, b);
  var max = a + b - min;

  if (max - min === 1 && Math.ceil(min / 2) === Math.ceil(max / 2)) {
    return 1;
  }

  return 1 + solution(n / 2, Math.ceil(min / 2), Math.ceil(max / 2));
}
