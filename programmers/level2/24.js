function solution(priorities, location) {
  var answer = 0;
  let stack = [];
  let rank = Array.from({ length: priorities.length }, (v, i) => i);
  while (priorities.length > 0) {
    if (priorities[0] === Math.max(...priorities)) {
      stack.push(rank.shift());
      priorities.shift();
    } else {
      priorities.push(priorities.shift());
      rank.push(rank.shift());
    }
  }
  answer = stack.indexOf(location) + 1;
  return answer;
}
