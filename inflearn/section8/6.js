function sol(m, arr) {
  let answer = 0;
  function DFS(L, point, time) {
    if (time > m) return;
    if (L === arr.length) {
      answer = Math.max(answer, point);
    } else {
      DFS(L + 1, point + arr[L][0], time + arr[L][1]);
      DFS(L + 1, point, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}
console.log(
  sol(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
