function solution(distance, rocks, n) {
  let answer = 0;
  let lt = 1;
  let rt = distance;
  rocks.sort((a, b) => a - b);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
  }
  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
