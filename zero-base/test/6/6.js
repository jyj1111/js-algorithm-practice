function solution(w, h) {
  var min = Math.min(w, h);

  return (w * h - Math.floor(min / 2)) * 500 + 2 * Math.floor(min / 2) * 300;
}

console.log(solution(1, 1));
console.log(solution(5, 3));
console.log(solution(1, 100));
console.log(solution(100, 2));
console.log(solution(100, 100));
