function solution(arr, n) {
  var clinic = Array(n).fill(0);
  var time = 0;
  while (arr.length || clinic.reduce((val, acc) => val + acc, 0)) {
    for (let i = 0; i < n; i++) {
      if (clinic[i] === 0) {
        if (arr.length) {
          clinic[i] = arr.shift();
        }
      } else {
        clinic[i] -= 1;
      }
    }
    time += 1;
    console.log(clinic);
  }
  return time;
}
console.log(solution([1, 1, 1, 2, 2, 1, 1], 3));
console.log(solution([1], 10));
console.log(solution([10], 1));
console.log(solution([1, 1, 2, 2, 3, 3], 2));
console.log(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
