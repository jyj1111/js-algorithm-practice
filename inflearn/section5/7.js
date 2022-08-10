function sol(str1, str2) {
  let map1 = new Map();
  let map2 = new Map();
  let s1 = str1.split("");
  let s2 = str2.split("");
  s1.sort();
  s2.sort();
  for (let x of s1) {
    map1.has(x) ? map1.set(x, map1.get(x) + 1) : map1.set(x, 1);
  }
  for (let x of s2) {
    map2.has(x) ? map2.set(x, map2.get(x) + 1) : map2.set(x, 1);
  }

  console.log(map1);
  console.log(map2);
  for (let x of map1.keys()) {
    if (map1.get(x) !== map2.get(x)) {
      return "NO";
    }
  }
  return "YES";
}

console.log(sol("AbaAeCe", "baeeACA"));
console.log(sol("abaCC", "Caaab"));
