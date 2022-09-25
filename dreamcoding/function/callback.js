function print(i) {
  console.log(i);
}
function doubleprint(i) {
  console.log(2 * i);
}

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(3, print);
iterate(3, doubleprint);
