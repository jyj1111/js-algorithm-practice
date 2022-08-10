function sol(k, arr) {
  let p1 = 0;
  let p2 = k - 1;
  let n = arr.length;

  let answer = 0;
  while (p2 < n) {
    let hap = 0;
    for (let i = p1; i <= p2; i++) {
      hap += arr[i];
    }
    answer = Math.max(answer, hap);
    p1++;
    p2++;
  }
  return answer;
}

console.log(sol(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
