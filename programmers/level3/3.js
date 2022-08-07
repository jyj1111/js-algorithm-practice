function solution(n, times) {
  let answer = 0;
  times.sort();
  let lt = Math.min(...times);
  let rt = n * Math.min(...times);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let count = 0;
    count = times.reduce((val, acc) => val + parseInt(mid / acc), 0);
    if (count >= n) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

console.log(solution(6, [7, 10]));
