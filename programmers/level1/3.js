function solution(arr) {
  let i = 0;
  let stack = [];
  while (i < arr.length) {
    if (arr[i + 1] !== arr[i]) {
      stack.push(arr[i]);
    }
    i++;
  }

  return stack;
}
