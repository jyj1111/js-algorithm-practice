function sol(num, arr) {
  const sarr = [...arr];
  sarr.sort((a, b) => b - a);
  const arr1 = arr.map((item) => sarr.indexOf(item) + 1);

  return arr1;
}

console.log(sol(5, [87, 89, 92, 100, 76]));
