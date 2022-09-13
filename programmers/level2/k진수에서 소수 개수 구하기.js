function prime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  var answer = 0;
  var arr = n
    .toString(k)
    .split("0")
    .map((item) => Number(item));
  var arr1 = arr.filter((item) => prime(item));
  return arr1.length;
}
