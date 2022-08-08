function sol(m, arr) {
  let p1 = (p2 = 0);
  const n = arr.length;
  let count = 0;
  let hap = arr[0];
  while (p1 < n && p2 < n) {
    if (hap === m) {
      count++;
      hap -= arr[p1++];
    } else if (hap > m) {
      hap -= arr[p1++];
    } else {
      hap += arr[++p2];
    }
    console.log(p1, p2);
  }
  return count;
}

console.log(sol(6, [1, 2, 1, 3, 1, 1, 1, 2]));
console.log(sol(5, [1, 2, 3, 2, 5]));
