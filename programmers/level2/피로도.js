function solution(k, dungeons) {
  var answer = 0;
  var n = dungeons.length;
  var checked = Array(n).fill(0);
  function DFS(idx, tired, count) {
    if (idx === n) {
      answer = Math.max(answer, count);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (!checked[i]) {
          checked[i] = 1;
          if (tired >= dungeons[i][0]) {
            DFS(idx + 1, tired - dungeons[i][1], count + 1);
          } else {
            DFS(idx + 1, tired, count);
          }
          checked[i] = 0;
        }
      }
    }
  }
  DFS(0, k, 0);
  return answer;
}
