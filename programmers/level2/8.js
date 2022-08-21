function solution(s) {
  var answer = true;
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return answer;
}
