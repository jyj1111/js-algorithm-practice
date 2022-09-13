function solution(fees, records) {
  var answer = [];
  var time = [];
  var carNum = [];
  var sortCarNum = [];
  var inout = [];
  for (let i = 0; i < records.length; i++) {
    var arr = records[i].split(" ");
    var hourminute = arr[0].split(":").map((item) => Number(item));
    time.push(hourminute[0] * 60 + hourminute[1]);
    carNum.push(Number(arr[1]));
    inout.push(arr[2]);
  }
  sortCarNum = new Set(carNum);
  sortCarNum = [...sortCarNum];
  sortCarNum.sort((a, b) => a - b);

  for (let x of sortCarNum) {
    var t = 0;
    for (let i = 0; i < carNum.length; i++) {
      if (x === carNum[i]) {
        if (inout[i] === "IN") {
          t -= time[i];
        } else {
          t += time[i];
        }
      }
    }
    if (t <= 0) {
      t += 23 * 60 + 59;
    }

    if (t < fees[0]) {
      answer.push(fees[1]);
    } else {
      answer.push(fees[1] + Math.ceil((t - fees[0]) / fees[2]) * fees[3]);
    }
  }
  return answer;
}
