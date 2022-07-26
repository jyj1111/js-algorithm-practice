function sum(a) {
  let hap = 0;
  for (let i = 1; i <= a; i++) {
    hap += i;
  }
  return hap;
}

console.log(sum(6));
console.log(sum(10));
