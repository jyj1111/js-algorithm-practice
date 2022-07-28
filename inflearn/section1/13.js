function sol(str) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if (65 <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 90) {
      s += str[i].toLowerCase();
    } else {
      s += str[i].toUpperCase();
    }
  }
  return s;
}

console.log(sol("StuDy"));
