function sol(str) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      stack.pop();
      if (str[i - 1] === "(") {
        count += stack.length;
      } else {
        count += 1;
      }
    }
  }
  return count;
}
console.log(sol("()(((()())(())()))(())"));
console.log(sol("(((()(()()))(())()))(()())"));
