function neighbor(x, y) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y[i]) {
      count++;
    }
  }

  if (count === x.length - 1) {
    return true;
  } else {
    return false;
  }
}

function solution(begin, target, words) {
  var answer = 0;
  words.unshift(begin);
  var checked = Array(words.length).fill(0);
  var queue = [];
  queue.push(begin);
  checked[0] = 1;
  var dis = Array(words.length).fill(0);

  while (queue.length) {
    let word = queue.shift();
    if (word === target) {
      return dis[words.indexOf(word)];
    }

    for (let i = 0; i < words.length; i++) {
      if (neighbor(word, words[i]) && !checked[i]) {
        queue.push(words[i]);
        checked[i] = 1;
        dis[i] = dis[words.indexOf(word)] + 1;
      }
    }
  }
  return answer;
}
