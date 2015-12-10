import fs from 'fs';

console.time('Ran for');
let fileName = './inputs/10.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
  let lines = content.split(/\n/);
  let minSoFar = [Number.MAX_VALUE, Number.MAX_VALUE];
  let maxSoFar = [Number.MIN_VALUE, Number.MIN_VALUE];

  let profit = 0;

  lines.forEach((line, i) => {
    let currentVal = parseFloat(line);
    lines[i] = currentVal;

    if(currentVal < lines[minSoFar[0]] || currentVal < lines[minSoFar[1]]) {
      let indexToRemove = currentVal < lines[minSoFar[0]] ? 0 : 1;
      minSoFar = minSoFar.splice(indexToRemove, 1);
    }

    if(currentVal > lines[maxSoFar[0]] || currentVal > lines[maxSoFar[1]]) {
      let indexToRemove = currentVal > lines[maxSoFar[0]] ? 0 : 1;
      maxSoFar = minSoFar.splice(indexToRemove, 1);
    }
  });

  console.log(minSoFar);
  console.log(maxSoFar);

  console.log(profit.toFixed(4));
  console.timeEnd('Ran for');

  function setMinSoFar(val) {
    if(val > minSoFar[0] && val > minSoFar[1]) return;
    let indexToRemove = val < minSoFar[0] ? 0 : 1;
    minSoFar = minSoFar.splice(indexToRemove, 1);
  }

});
