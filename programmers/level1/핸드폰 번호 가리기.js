function solution(phone_number) {
  var answer = "";
  var n = phone_number.length;
  return "*".repeat(n - 4) + phone_number.slice(n - 4, n);
}
