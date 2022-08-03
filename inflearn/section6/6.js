function sol(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let j = 0;
  while (arr.length !== 1) {
    j = j - 1;
    j = (j + k) % arr.length;
    arr.splice(j, 1);
  }
  return arr.pop();
}
console.log(sol(8, 3));
