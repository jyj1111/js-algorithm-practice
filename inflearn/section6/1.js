function sol(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || arr.length === 0) {
      arr.push(str[i]);
    } else if (str[i] === ")") {
      arr.pop();
    }
    console.log(arr);
  }
  if (arr.length > 0) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(sol("(()(()))(()"));
