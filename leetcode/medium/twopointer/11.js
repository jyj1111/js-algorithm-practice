var maxArea = function (height) {
  let answer = 0;
  let p1 = 0;
  let n = height.length;
  let p2 = n - 1;
  while (p1 < p2) {
    let width = (p2 - p1) * Math.min(height[p1], height[p2]);
    if (width > answer) {
      answer = width;
    }
    if (height[p1] < height[p2]) {
      const curleft = height[p1];
      while (p1 < n && curleft >= height[p1]) {
        p1++;
      }
    } else {
      const curright = height[p2];
      while (p2 >= 0 && curright >= height[p2]) {
        p2--;
      }
    }
  }

  return answer;
};
