function sol(n) {
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i < n + 1; i++) {
        if (ch[i] === 1) {
          tmp += i + " ";
        }
      }
      console.log(tmp);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
}
sol(3);
