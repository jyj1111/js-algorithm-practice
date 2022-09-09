function solution(n) {
  var answer;
  var queue = [];
  var count = 0;
  queue.push("1", "2", "4");
  while (queue) {
    count++;
    var x = queue.shift();
    if (count === n) {
      answer = x;
      break;
    }
    for (let item of ["1", "2", "4"]) {
      queue.push(x + item);
    }
  }

  return answer;
}
