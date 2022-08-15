function sol(arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    console.log(L, sum);
    if (sum > m) {
      return;
    }
    if (L >= answer) {
      return;
    }
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}
console.log(sol([1, 2, 5], 15));
