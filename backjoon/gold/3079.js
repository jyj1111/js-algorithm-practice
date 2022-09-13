//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
function solution(n, m, times) {
  let answer = 0;
  times.sort();
  let lt = Math.min(...times);
  let rt = m * Math.min(...times);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let count = 0;
    count = times.reduce((val, acc) => val + parseInt(mid / acc), 0);
    if (count >= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
/*const [n, m] = input[0].split(" ");
let times = [];
for (let i = 1; i <= +n; i++) {
  times.push(+input[i]);
}

console.log(solution(+n, +m, times));*/
console.log(solution(2, 6, [7, 10]));
