function solution(y, m, d, repeat) {
  if (repeat === "y") {
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
      if (m === 2 && d === 29) {
        return `${String(y + 1)}-${String(m)}-${String(d - 1)}`;
      }
    }
    return `${String(y + 1)}-${String(m)}-${String(d)}`;
  } else if (repeat === "m") {
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
      if (m === 1 && d >= 30 && d <= 31) {
        return `${String(y)}-${String(m + 1)}-${String(29)}`;
      }
    } else {
      if (m === 1 && d >= 29 && d <= 31) {
        return `${String(y)}-${String(m + 1)}-${String(28)}`;
      }
    }
    if ((m === 3 || m === 5 || m === 8 || m === 10) && d === 31) {
      return `${String(y)}-${String(m + 1)}-${String(30)}`;
    }
    if (m === 12 && d === 31) {
      return `${String(y + 1)}-${String(1)}-${String(d)}`;
    }
    return `${String(y)}-${String(m + 1)}-${String(d)}`;
  } else {
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
      if (m === 2 && d === 29) {
        return `${String(y)}-${String(m + 1)}-${String(1)}`;
      }
    } else {
      if (m === 2 && d === 28) {
        return `${String(y)}-${String(m + 1)}-${String(1)}`;
      }
    }
    if (
      (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10) &&
      d === 31
    ) {
      return `${String(y)}-${String(m + 1)}-${String(1)}`;
    }
    if ((m === 4 || m === 6 || m === 9 || m === 11) && d === 30) {
      return `${String(y)}-${String(m + 1)}-${String(1)}`;
    }
    if (m === 12 && d === 31) {
      return `${String(y + 1)}-${String(1)}-${String(1)}`;
    }
    return `${String(y)}-${String(m)}-${String(d + 1)}`;
  }
}

console.log(solution(2022, 5, 31, "m"));
console.log(solution(2024, 1, 31, "m"));
console.log(solution(2000, 12, 31, "d"));
console.log(solution(2007, 6, 24, "d"));
console.log(solution(2012, 1, 31, "m"));
console.log(solution(2024, 2, 29, "y"));
console.log(solution(2040, 2, 28, "d"));
console.log(solution(2032, 10, 30, "d"));
console.log(solution(2027, 2, 28, "y"));
