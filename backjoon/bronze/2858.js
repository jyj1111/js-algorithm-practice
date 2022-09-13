function solution(brown, yellow) {
  var answer = "";

  var width = brown + yellow;
  for (let x = yellow; x >= Math.sqrt(yellow); x--) {
    if (yellow % x === 0 && (x + 2) * (yellow / x + 2) === width) {
      let large = x + 2;
      let small = yellow / x + 2;
      if (small > large) {
        [large, small] = [small, large];
      }
      answer = `${large} ${small}`;
      return answer;
    }
  }
}

console.log(solution(22, 20));
console.log(solution(58, 110));
