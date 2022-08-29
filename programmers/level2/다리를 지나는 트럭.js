function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  var bridge_weights = Array(bridge_length).fill(0);

  while (truck_weights.length !== 0) {
    bridge_weights.pop();
    answer++;
    if (
      truck_weights[0] + bridge_weights.reduce((val, acc) => val + acc, 0) <=
      weight
    ) {
      bridge_weights.unshift(truck_weights.shift());
    } else {
      bridge_weights.unshift(0);
    }
  }

  return answer + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
