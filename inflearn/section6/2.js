function sol(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      while (arr.pop() !== "(") {}
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join("");
}

console.log(sol("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
