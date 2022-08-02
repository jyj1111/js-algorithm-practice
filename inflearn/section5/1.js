function sol(arr1, arr2) {
  let p1 = (p2 = 0);
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }
  if (p1 === n) {
    for (let i = p2; i < m; i++) {
      answer.push(arr2[i]);
    }
  } else {
    for (let j = p2; j < n; j++) {
      answer.push(arr1[j]);
    }
  }

  return answer;
}

console.log(sol([1, 3, 5], [2, 3, 6, 7, 9]));
