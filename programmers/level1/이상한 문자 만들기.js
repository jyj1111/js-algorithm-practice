function solution(s) {
  var answer = "";
  for (let x of s.split(" ")) {
    for (let i = 0; i < x.length; i++) {
      i % 2 === 0
        ? (answer += x[i].toUpperCase())
        : (answer += x[i].toLowerCase());
    }
    answer += " ";
  }
  return answer.slice(0, answer.length - 1);
}
