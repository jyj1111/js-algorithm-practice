function solution(arr, n) {
  var clinic = Array(n).fill(0);
  var time = 0;
  while (arr.length || clinic.reduce((val, acc) => val + acc, 0)) {
    var delay = 0;
    for (let i = 0; i < n; i++) {
      if (clinic[i] === 0 && arr.length) {
        clinic[i] = arr.shift();
        delay = 1;
      }
    }
    time += delay;

    console.log(clinic);
    clinic = clinic.map((item) => (item > 0 ? item - 1 : 0));
    console.log(clinic);
    time += 1;
  }
  return time;
}
