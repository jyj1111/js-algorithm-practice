function sol(str) {
  let s = "";

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      s += str[i];
    }
  }
  return Number(s);
}

console.log(sol("g0en2T0s8eSoft"));
