function solution(s) {
  var answer = "";
  var arr = s.split(" ").map((item) => Number(item));
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  answer += min.toString() + " " + max.toString();
  return answer;
}
