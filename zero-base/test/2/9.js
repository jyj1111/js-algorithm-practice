function solution(arr) {
  var answer = arr.reduce((val, acc) => val + acc, 0);
  return answer;
}
console.log(solution([5, 5, 5, 6, 6]));
console.log(solution([2, 2, 2, 2, 2]));
console.log(solution([3, 5, 3, 3, 3]));
console.log(solution([2, 1, 2, 1, 2]));
console.log(solution([6, 2, 6, 6, 2]));
console.log(solution([1, 3, 5, 4, 2]));
console.log(solution([6, 2, 4, 3, 5]));
console.log(solution([1, 1, 4, 3, 2]));
console.log(solution([6, 5, 4, 3, 6]));
console.log(solution([4, 4, 1, 5, 3]));
console.log(solution([5, 1, 1, 1, 4]));
