console.time('Ran');

let column = 142453146368;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let result = "";

while(column > 0) {
  column--;
  let remaining = column % 26;
  result = alphabet[remaining] + result;
  column = (column - remaining) / 26;
}

console.log(result);

console.timeEnd('Ran');
