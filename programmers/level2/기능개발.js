function solution(progresses, speeds) {
  var answer = [];
  var days = [];
  days = progresses.map((item, idx) => Math.ceil((100 - item) / speeds[idx]));

  var count = 1;
  var start = days[0];
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= start) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      start = days[i];
    }
  }
  answer.push(count);
  return answer;
}
