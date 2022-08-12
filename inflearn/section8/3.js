let answer = "";
function first(v) {
  if (v > 7) return;
  answer += v + " ";
  first(2 * v);
  first(2 * v + 1);
  return answer;
}
let answer1 = "";
function mid(v) {
  if (v > 7) return;
  mid(2 * v);
  answer1 += v + " ";
  mid(2 * v + 1);
  return answer1;
}
let answer2 = "";
function last(v) {
  if (v > 7) return;
  last(2 * v);
  last(2 * v + 1);
  answer2 += v + " ";
  return answer2;
}

console.log(first(1));
console.log(mid(1));
console.log(last(1));
