function makeMap(s) {
  let arr = s.split("");
  arr.sort();
  let map = new Map();
  for (let x of arr) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }
  return map;
}

function sameMap(m1, m2) {
  for (let x of m1.keys()) {
    if (m1.get(x) !== m2.get(x)) {
      return false;
    }
  }
  return true;
}

function sol(str1, str2) {
  let count = 0;
  let p1 = 0;
  let p2 = str2.length - 1;
  const map2 = makeMap(str2);
  while (p2 < str1.length) {
    let s = "";
    for (let i = p1; i <= p2; i++) {
      s += str1[i];
    }
    let map1 = makeMap(s);
    if (sameMap(map1, map2)) {
      count++;
    }
    p1++;
    p2++;
  }

  return count;
}

console.log(sol("bacaAacba", "abc"));
