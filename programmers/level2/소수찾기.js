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
function makeNum(arr) {
  var n = arr.length;
  var arr1 = [];
  var arr2 = [];
  var checked = Array(n).fill(0);
  function DFS(idx, k) {
    if (idx === k) {
      arr2.push(Number(arr1.join("")));
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (!checked[i]) {
          checked[i] = 1;
          arr1.push(arr[i]);
          DFS(idx + 1, k);
          arr1.pop();
          checked[i] = 0;
        }
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    DFS(0, i);
  }
  var set = new Set(arr2);
  return [...set];
}

function solution(numbers) {
  var answer = 0;
  var arr = [];
  var num_list = numbers.split("").map((item) => Number(item));
  arr = makeNum(num_list);

  for (let x of arr) {
    if (prime(x)) {
      answer++;
    }
  }

  return answer;
}
console.log(solution("17"));
console.log(solution("011"));
