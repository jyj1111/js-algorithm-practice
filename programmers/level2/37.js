function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  const n = people.length;
  let p1 = 0;
  let p2 = n - 1;

  while (p1 <= p2) {
    if (people[p1] + people[p2] > limit) {
      p2--;
    } else {
      p2--;
      p1++;
    }
    answer++;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
console.log(solution([70, 50, 80, 50, 90, 40], 240));
