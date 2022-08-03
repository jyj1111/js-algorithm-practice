function sol(prior, curriculum) {
  let queue = [];
  for (let i = 0; i < prior.length; i++) {
    for (let j = 0; j < curriculum.length; j++) {
      if (curriculum[j] === prior[i]) {
        queue.push([prior[i], j]);
        break;
      }
    }
  }
  queue.sort((a, b) => a[1] - b[1]);
  const arr = queue.map((item) => item[0]);
  return prior === arr.join("") ? "YES" : "NO";
}
console.log(sol("CBA", "CBDAGE"));
