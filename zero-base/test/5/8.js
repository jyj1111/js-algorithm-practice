function solution(h, w) {
  let dis = Array.from({ length: h }, () => Array(w).fill(1));

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dis[i][j] = dis[i][j - 1] + dis[i - 1][j];
    }
  }
  return dis[h - 1][w - 1];
}

console.log(solution(2, 3));
console.log(solution(4, 8));
console.log(solution(7, 7));
console.log(solution(10, 5));
console.log(solution(25, 1));
console.log(solution(13, 14));
