function count(str) {
  return str.split("").filter((item) => item === "1").length;
}

function solution(n) {
  var i = n + 1;
  var answer;
  while (true) {
    if (count(i.toString(2)) === count(n.toString(2))) {
      answer = i;
      break;
    }
    i += 1;
  }
  return answer;
}
