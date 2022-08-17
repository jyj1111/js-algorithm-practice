function sol(n, m) {
  let answer = 0;
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer++;
      console.log(...tmp);
    } else {
      for (let i = 1; i <= n; i++) {
        if (L === 0) {
          tmp[L] = i;
          DFS(L + 1);
        } else {
          if (i > tmp[L - 1]) {
            tmp[L] = i;
            DFS(L + 1);
          }
        }
      }
    }
  }

  DFS(0);
  return answer;
}
console.log(sol(4, 2));
