function sol(str) {
  let map = new Map();
  for (let x of str) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }
  let max = 0;
  let answer;

  for (let x of map.keys()) {
    if (max < map.get(x)) {
      answer = x;
      max = map.get(x);
    }
  }

  return answer;
}

console.log(sol("BACBACCACCBDEDE"));
