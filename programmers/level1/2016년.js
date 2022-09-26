function solution(a, b) {
  var answer = 0;
  var arr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < a - 1; i++) {
    answer += days[i];
  }
  answer += b - 1;

  return arr[answer % 7];
}
