/*const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();*/
function balance(str) {
  let arr = str.split("");

  let stack = [];
  for (let item of arr) {
    if (item === "(" || item === "[") {
      stack.push(item);
    } else if (item === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      }
    } else if (item === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

function sol(arr) {
  let arr1 = [];
  let answer;
  for (let x of arr) {
    if (balance(x)) {
      answer = "yes";
    } else {
      answer = "no";
    }
    arr1.push(answer);
  }
  return arr1;
}

console.log(
  sol([
    "So when I die (the [first] I will see in (heaven) is a score list)",
    "[ first in ] ( first out )",
    "Half Moon tonight (At least it is better than no Moon at all]",
    "A rope may form )( a trail in a maze",
    "Help( I[m being held prisoner in a fortune cookie factory)]",
    "([ (([( [ ] ) ( ) (( ))] )) ])",
    " .",
  ])
);
