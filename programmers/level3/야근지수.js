function solution(n, works) {
  var answer = 0;

  if (works.reduce((val, acc) => val + acc) <= n) {
    return 0;
  }
  works.sort((a, b) => b - a);
  while (true) {
    const max = works[0];
    for (let j = 0; j < works.length; j++) {
      if (works[j] >= max) {
        works[j]--;
        n--;
      }

      if (n === 0) {
        return works.reduce((val, acc) => val + acc ** 2, 0);
      }
    }
  }
}
