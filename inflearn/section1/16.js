function sol(str) {
  let s = "";
  const set = new Set(str.split(""));
  for (let item of set) {
    s += item;
  }

  return s;
}

console.log(sol("ksekkset"));
