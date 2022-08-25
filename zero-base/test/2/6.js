function solution(a, b) {
  a = a.toUpperCase();
  b = b.toUpperCase();

  var arr1 = a
    .split("")
    .filter((item) => 65 <= item.charCodeAt(0) && item.charCodeAt(0) <= 90);
  var arr2 = b
    .split("")
    .filter((item) => 65 <= item.charCodeAt(0) && item.charCodeAt(0) <= 90);
  if (arr1.join() === arr2.join()) {
    return "NO";
  }
  arr1.sort();
  arr2.sort();
  let map1 = new Map();
  let map2 = new Map();
  for (let x of arr1) {
    map1.has(x) ? map1.set(x, map1.get(x) + 1) : map1.set(x, 1);
  }
  for (let x of arr2) {
    map2.has(x) ? map2.set(x, map2.get(x) + 1) : map2.set(x, 1);
  }

  for (let x of map1.keys()) {
    if (map1.get(x) !== map2.get(x)) {
      return "NO";
    }
  }
  return "YES";
}
