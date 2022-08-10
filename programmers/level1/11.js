function solution(nums) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let n = nums.length / 2;
  let map = new Map();
  for (let x of nums) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }
  for (let x of map.keys()) {
    answer++;
    n--;
    if (n == 0) {
      break;
    }
  }
  return answer;
}
