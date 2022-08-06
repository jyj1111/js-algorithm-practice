function count(arr, mid) {
  let count = 1;
  let start = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - start >= mid) {
      count++;

      start = arr[i];
    }
  }
  return count;
}

function sol(c, arr) {
  let answer;
  let lt = 1;
  arr.sort();
  console.log(arr);
  let rt = Math.max(...arr) - Math.min(...arr);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}
console.log(sol(3, [1, 2, 8, 4, 9]));
