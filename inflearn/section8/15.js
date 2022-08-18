function sol(k, arr, m) {
  let answer = 0;
  let n = arr.length;
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}
console.log(sol(3, [2, 4, 5, 8, 12], 6));
