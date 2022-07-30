function sol(str) {
  str = str.toUpperCase();
  let num = str.length;
  for (let i = 0; i < Math.floor(num / 2); i++) {
    if (str[i] !== str[num - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(sol("gooG"));
