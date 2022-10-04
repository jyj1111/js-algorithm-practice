function solution(field, n) {
  var answer = 0;
  for (let i = 0; i <= field.length - n; i++) {
    for (let j = 0; j <= field[i].length - n; j++) {
      var sum = 0;
      for (let k = 0; k < n; k++) {
        for (let t = 0; t < n; t++) {
          sum += field[i + k][j + t];
        }
      }
      //console.log(sum);
      answer = Math.max(answer, sum);
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 0, 1],
      [0, 0, 1],
      [0, 1, 1],
    ],
    2
  )
);

console.log(
  solution(
    [
      [0, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    3
  )
);
console.log(
  solution(
    [
      [1, 1, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 1, 0],
    ],
    3
  )
);
