function sol(m, arr) {
  let p1 = (p2 = 0);
  const n = arr.length;
  let count = 0;
  let hap = arr[0];
  while (p1 < n && p2 < n) {
    if (hap > m) {
      hap -= arr[p1++];
    } else {
      count += p2 - p1 + 1;
      hap += arr[++p2];
    }
    console.log(p1, p2);
  }
  return count;
}

console.log(sol(5, [1, 3, 1, 2, 3]));
