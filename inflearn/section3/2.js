function sol(str) {
  const arr = str.toUpperCase().split("");
  const arr1 = arr.filter(
    (item) => 65 <= item.charCodeAt(0) && item.charCodeAt(0) <= 90
  );
  for (let i = 0; i < Math.floor(arr1.length / 2); i++) {
    if (arr1[i] !== arr1[arr1.length - 1 - i]) {
      return "NO";
    }
  }
  return "YES";
}

console.log(sol("found7, time: study; Yduts; emit, 7Dnuof"));
