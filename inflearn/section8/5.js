function sol(n, arr) {
  let hap = arr.reduce((val, acc) => val + acc, 0);
  let answer = "NO";
  let flag = 0;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (hap - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(sol(6, [1, 3, 5, 6, 7, 10]));
