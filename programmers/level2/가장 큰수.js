function solution(numbers) {
  var answer = "";
  numbers.sort(
    (a, b) =>
      parseInt(b.toString() + a.toString()) -
      parseInt(a.toString() + b.toString())
  );
  if (numbers[0] === 0) {
    return "0";
  }
  answer = numbers.join("");
  return answer;
}
