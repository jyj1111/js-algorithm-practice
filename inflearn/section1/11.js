function sol(str) {
  const arr = str.split("");
  const arr1 = arr.filter(
    (item) => item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90
  );
  return arr1.length;
}

console.log(sol("KoreaTimeGood"));
