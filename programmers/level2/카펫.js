function solution(brown, yellow) {
  var width = brown + yellow;
  for (let x = yellow; x >= Math.sqrt(yellow); x--) {
    if (yellow % x === 0 && (x + 2) * (yellow / x + 2) === width) {
      return [x + 2, yellow / x + 2];
    }
  }
}
