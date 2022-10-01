function prime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  var answer = 0;
  if (n === 1) {
    return 0;
  }
  for (let i = 2; i <= n; i++) {
    if (prime(i)) {
      answer++;
    }
  }
  return answer;
}
