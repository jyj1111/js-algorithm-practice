function solution(s) {
  var answer = "";
  var arr = s.split("");
  arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

  return arr.join("");
}
