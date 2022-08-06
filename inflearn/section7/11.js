function count(arr, mid) {
  let count = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > mid) {
      count++;

      sum = arr[i];
    }
  }
  return count;
}

function sol(m, arr) {
  let answer;
  let lt = Math.max(...arr);
  let rt = arr.reduce((val, acc) => val + acc);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}
console.log(sol(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
