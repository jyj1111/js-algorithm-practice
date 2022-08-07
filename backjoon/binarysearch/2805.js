function count(arr, mid) {
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= mid) {
      len += arr[i] - mid;
    }
  }
  return len;
}

function sol(m, arr) {
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...arr);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
console.log(sol(7, [20, 15, 10, 17]));
console.log(sol(20, [4, 42, 40, 26, 46]));
