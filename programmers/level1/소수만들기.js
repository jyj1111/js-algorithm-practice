function solution(nums) {
  var answer = 0;
  var arr = [];
  var checked = Array(nums.length).fill(0);
  nums.sort((a, b) => a - b);
  function prime(n) {
    if (n === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  function DFS(idx, arr) {
    if (idx > 3) {
      return;
    }
    if (idx === 3) {
      if (prime(arr.reduce((val, acc) => val + acc, 0))) {
        answer++;
        return;
      }
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (idx === 0) {
          arr.push(nums[i]);
          DFS(idx + 1, arr);
          arr.pop();
        } else {
          if (nums[i] > arr[idx - 1]) {
            arr.push(nums[i]);
            DFS(idx + 1, arr);
            arr.pop();
          }
        }
      }
    }
  }
  DFS(0, arr);
  return answer;
}
