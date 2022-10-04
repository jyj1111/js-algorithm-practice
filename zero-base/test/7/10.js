function solution(arr, K) {
  let n = arr.length / K;
  arr.sort((a, b) => a - b);
  if (n <= 1) {
    return arr[arr.length - 1];
  } else {
    return arr[K - 1] + solution(arr.slice(K, arr.length), K);
  }
}

console.log(solution([0], 1));
console.log(solution([1000], 1));
console.log(solution([99, 55, 75, 80, 41, 42, 95, 96, 22, 48], 5));
console.log(
  solution(
    [
      50, 87, 26, 83, 82, 77, 9, 69, 74, 16, 86, 29, 14, 46, 10, 95, 90, 55, 33,
      93,
    ],
    10
  )
);
