function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sol(num, arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let sum = 0;
    while (num > 0) {
      sum *= 10;
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    arr1.push(sum);
  }

  let arr2 = [];
  arr2 = arr1.filter((item) => isPrime(item));

  return arr2;
}

console.log(sol(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
