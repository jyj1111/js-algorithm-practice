function sol(str, ch) {
  const arr = str.split(ch);
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let len = arr[i].length;
    for (let j = 0; j < len; j++) {
      if (j < Math.ceil(len / 2)) {
        {
          arr1.push(j + 1);
        }
      } else {
        arr1.push(len - j);
      }
    }

    arr1.push(0);
  }
  arr1.pop();
  return arr1;
}

console.log(sol("teachermode", "e"));
