function solution(board) {
  var answer = 0;
  var n = board.length;
  for (let i = 0; i < n; i++) {
    var count1 = 0;
    var count2 = 0;
    for (let j = 0; j < n; j++) {
      if (board[i][j] === true) {
        count1++;
      }
      if (board[j][i] === true) {
        count2++;
      }
    }
    if (count1 === n) {
      answer++;
    }
    if (count2 === n) {
      answer++;
    }
  }
  return answer;
}
