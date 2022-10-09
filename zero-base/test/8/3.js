function solution(arr) {
  arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    return 0;
  }
  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    if (arr[2 * i] !== arr[2 * i + 1]) {
      return arr[2 * i];
    }
  }
}

console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9]));
