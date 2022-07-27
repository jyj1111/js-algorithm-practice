function sol(str, ch) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (ch === str[i]) {
      num++;
    }
  }
  return num;
}

console.log(sol("COMPUTERPROGRAMMING", "R"));
