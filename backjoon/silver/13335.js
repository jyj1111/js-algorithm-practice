const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(n, bridge_length, weight, truck_weights) {
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
const [n, l, w] = input[0].split(" ");
let arr = input[1].split(" ").map((item) => +item);

console.log(solution(+n, +l, +w, arr));
