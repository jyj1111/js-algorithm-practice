function sol(c, arr) {
  let answer = 0;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(sol(259, [81, 58, 42, 33, 61]));
