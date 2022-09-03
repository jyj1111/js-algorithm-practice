function solution(sizes) {
  let a = sizes.length;
  let start_x = sizes[0][0];
  let start_y = sizes[0][1];
  let start_width = start_x * start_y;
  let answer = start_width;
  let x, y, r_x, r_y;
  let width1, width2;
  for (let i = 1; i < a; i++) {
    x = Math.max(sizes[i][0], start_x);
    y = Math.max(sizes[i][1], start_y);
    width1 = Math.max(start_width, x * y);
    r_x = Math.max(sizes[i][1], start_x);
    r_y = Math.max(sizes[i][0], start_y);
    width2 = Math.max(start_width, r_x * r_y);
    if (width1 > width2) {
      answer = width2;
      start_x = r_x;
      start_y = r_y;
    } else {
      answer = width1;
      start_x = x;
      start_y = y;
    }
  }
  return answer;
}
