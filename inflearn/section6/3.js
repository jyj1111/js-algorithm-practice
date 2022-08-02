function sol(board, moves) {
  let basket = [];
  let num = 0;
  for (let k = 0; k < moves.length; k++) {
    for (let j = 0; j < board.length; j++) {
      let column = board[j][moves[k] - 1];
      if (column !== 0) {
        let len = basket.length;
        if (len > 0 && basket[len - 1] === column) {
          basket.pop();
          num += 2;
        } else {
          basket.push(column);
        }
        board[j][moves[k] - 1] = 0;
        break;
      }
    }
  }
  return num;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(sol(board, moves));
