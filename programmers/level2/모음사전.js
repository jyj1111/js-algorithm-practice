function solution(word) {
  var count = 0;
  var answer = 0;
  var ch = ["A", "E", "I", "O", "U"];
  var arr = [];
  function DFS(idx) {
    if (arr.join("") === word) {
      answer = count;
    }

    if (idx === ch.length) {
      return;
    } else {
      for (let x of ch) {
        arr.push(x);
        count++;
        DFS(idx + 1);
        arr.pop();
      }
    }
  }
  DFS(0);
  return answer;
}
