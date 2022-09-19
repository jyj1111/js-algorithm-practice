//const fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sol(n) {
  let arr = Array(11).fill(0);
  arr[1] = 1;
  arr[2] = 2;
  arr[3] = 4;
  for (let i = 4; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n];
}

/*
for(let i=1;i<=+input[0];i++){
  console.log(sol(+input[1]));

}
*/

console.log(sol(4));
