function solution(n, s) {
  var answer = Array(n).fill(Math.floor(s / n));

  if (answer[0] === 0) {
    return [-1];
  } else {
    for (let i = 0; i < s % n; i++) {
      answer[n - 1 - i]++;
    }
  }
  return answer;
}
