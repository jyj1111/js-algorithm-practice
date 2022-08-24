function solution(numbers, target) {
  var answer = 0;
  var n = numbers.length;
  function DFS(idx, sum) {
    if (idx > n) return;
    console.log(idx, sum);
    if (idx === n && sum === target) {
      answer++;
    } else {
      DFS(idx + 1, sum + numbers[idx]);
      DFS(idx + 1, sum - numbers[idx]);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
