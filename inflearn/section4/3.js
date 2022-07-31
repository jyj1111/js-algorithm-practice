Set.prototype.intersection = function (set) {
  const result = new Set();
  for (let value of set) {
    if (this.has(value)) {
      result.add(value);
    }
  }
  return result;
};
Set.prototype.union = function (set) {
  const result = new Set(this);
  for (let value of set) {
    result.add(value);
  }
  return result;
};

function sol(n, m, arr) {
  let set1 = new Set();

  for (let i = 0; i < m; i++) {
    let set = new Set();
    for (let j = 0; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(arr[i][j] * 10 + arr[i][k]);
      }
    }

    if (i === 0) {
      set1 = set1.union(set);
    } else {
      set1 = set1.intersection(set);
    }
  }
  return set1.size;
}

console.log(
  sol(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
