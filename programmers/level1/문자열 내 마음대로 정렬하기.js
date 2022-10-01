function ascll(a, b, n) {
  if (a[n].charCodeAt(0) === b[n].charCodeAt(0)) {
    for (let i = 0; i < a.length; i++) {
      if (a[i].charCodeAt(0) !== b[i].charCodeAt(0)) {
        return a[i].charCodeAt(0) - b[i].charCodeAt(0);
      }
    }
  }

  return a[n].charCodeAt(0) - b[n].charCodeAt(0);
}

function solution(strings, n) {
  var answer = [...strings];
  answer.sort((a, b) => ascll(a, b, n));
  return answer;
}
