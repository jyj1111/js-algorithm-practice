function sol(arr1, arr2) {
  let p1 = (p2 = 0);
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  arr1.sort();
  arr2.sort();
  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
    } else if (arr1[p1] > arr2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }

  return answer;
}

console.log(sol([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
