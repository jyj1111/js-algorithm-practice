function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  var bridge_weights = [];

  var sum = 0;
  while (truck_weights.length !== 0) {
    while (sum <= weight) {
      let item = truck_weights.shift();
      sum += item;
      bridge_weights.push(item);
      answer += 1;
    }
    let item1 = bridge_weights.pop();
    sum -= item1;
    truck_weights.unshift(item1);
    console.log(truck_weights);
    answer += bridge_length;
    bridge_weights.shift();
  }
}

console.log(solution(2, 10, [7, 4, 5, 6]));
