function sol(n, m) {
  let answer = 0;
  let ch = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer++;
      console.log(...ch);
    } else {
      for (let i = 1; i <= n; i++) {
        ch[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}
console.log(sol(3, 2));
