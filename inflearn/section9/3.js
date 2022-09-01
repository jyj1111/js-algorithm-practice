function solution(s, e) {
  let answer = 0;

  let queue = [];
  queue.push(s);
  while (queue.length) {
    let item = queue.shift();
    if (item === e) {
      break;
    } else {
      for (let x of [item - 1, item + 1, item + 5]) {
        queue.push(x);
      }
    }
    answer++;
  }

  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
