function sol(n, m) {
  let answer = 0;
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === m + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i]) {
          tmp += i + " ";
        }
      }
      console.log(tmp);
    } else {
    }

    DFS();
    DFS();
  }

  DFS(1);
  return answer;
}
console.log(sol(3, 2));
