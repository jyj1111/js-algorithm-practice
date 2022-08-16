function sol(m, arr) {
  let answer = 0;
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let combination = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer++;
      console.log(...combination);
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          combination[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}
console.log(sol(2, [3, 6, 9]));
