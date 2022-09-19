function solution(distance, time) {
  var velocity = distance.map((item, idx) => Math.floor(item / time[idx]));
  velocity.sort((a, b) => a - b);

  var friend = Math.max(...velocity);
  var enemy = 0;
  for (let time = 1; time <= friend; time++) {
    for (let v of velocity) {
      if (v === time) {
        enemy++;
        if (time - enemy < 0) {
          return -1;
        }
      }
    }
  }

  return friend - enemy;
}

console.log(solution([1, 2, 8], [1, 1, 2]));
console.log(solution([2, 2, 3, 6], [1, 1, 1, 2]));
console.log(solution([1, 1], [1, 1]));
console.log(solution([3, 3], [1, 1]));
console.log(solution([1, 5, 7], [1, 2, 3]));
console.log(solution([3, 3, 3], [1, 1, 1]));
