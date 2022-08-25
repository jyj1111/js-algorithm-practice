function Prime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!Prime(i)) {
      answer++;
    }
  }
  return answer;
}
