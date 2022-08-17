function sol(n, f) {
  let answer;
  let tmp = Array.from({ length: n }, () => 0);
  let ch = Array.from({ length: n + 1 }, () => 0);
  let flag = 0;
  function combi(n, r) {
    if (r === 0 || n === r) {
      return 1;
    }
    return combi(n - 1, r - 1) + combi(n - 1, r);
  }
  function DFS(L, sum) {
    console.log(L, sum);
    if (flag) {
      return;
    }
    if (L === n && sum === f) {
      answer = [...tmp];
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = i;
          DFS(L + 1, sum + tmp[L] * combi(n - 1, L));
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 0);

  return answer;
}
console.log(sol(4, 16));
