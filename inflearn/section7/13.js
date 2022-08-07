function count(arr, mid) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += parseInt(arr[i] / mid);
  }
  return count;
}

function sol(n, arr) {
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...arr);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= n) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
console.log(sol(11, [802, 743, 457, 539]));
