function sol(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      stack.push(Number(str[i]));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let c;
      if (str[i] === "+") {
        c = b + a;
      } else if (str[i] === "-") {
        c = b - a;
      } else if (str[i] === "*") {
        c = b * a;
      } else if (str[i] === "/") {
        c = b / a;
      }
      stack.push(c);
    }
  }
  return stack.pop();
}

console.log(sol("352+*9-"));
