function solution(answers) {
  var s1 = 0;
  var s2 = 0;
  var s3 = 0;
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr1[i % arr1.length]) {
      s1++;
    }
    if (answers[i] === arr2[i % arr2.length]) {
      s2++;
    }
    if (answers[i] === arr3[i % arr3.length]) {
      s3++;
    }
  }
  if (s1 === s2 && s2 === s3) {
    return [1, 2, 3];
  } else if (s1 === s2 && s1 > s3) {
    return [1, 2];
  } else if (s1 === s3 && s1 > s2) {
    return [1, 3];
  } else if (s2 === s3 && s2 > s1) {
    return [2, 3];
  } else if (s1 > Math.max(s2, s3)) {
    return [1];
  } else if (s2 > Math.max(s1, s3)) {
    return [2];
  } else if (s3 > Math.max(s1, s2)) {
    return [3];
  }
}
