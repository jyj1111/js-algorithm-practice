function solution(n) {
  var answer = 0;
  var num = Array(n + 1).fill(0);
  num[1] = 1;
  num[2] = 2;
  for (let i = 3; i <= n; i++) {
    num[i] = num[i - 1] + num[i - 2];
    num[i] = num[i] % 1000000007;
  }
  return num[n];
}
