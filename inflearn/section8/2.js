function sol(n) {
  if (n === 1) {
    return 1;
  }
  return sol(parseInt(n / 2)) * 10 + (n % 2);
}
console.log(sol(11));
