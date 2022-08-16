function sol(n, r) {
  function DFS(n, r) {
    if (r === 0 || n === r) {
      return 1;
    }
    return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  return DFS(n, r);
}
console.log(sol(5, 3));
console.log(sol(33, 19));
