function sol(str) {
  const arr = [];
  let set = new Set(str);
  for (let item of set) {
    arr.push(item);
    const count = str.lastIndexOf(item) - str.indexOf(item);
    if (count > 0) {
      arr.push(count + 1);
    }
  }
  return arr.join("");
}

console.log(sol("KKHSSSSSSSE"));
