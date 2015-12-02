import fs from 'fs';

console.time('1');
let fileName = './inputs/2.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
  let lines = content.split(/\n/);
  //Lowest number so far in the iteration
  let minSoFar = Number.MAX_VALUE;

  let maxProfit = lines.reduce((highestProfit, currentLine) => {
    let currentLineFloat = parseFloat(currentLine);
    minSoFar = currentLineFloat < minSoFar ? currentLineFloat : minSoFar;
    let profitForCurrentDay = currentLineFloat - minSoFar;

    return profitForCurrentDay > highestProfit
            ? profitForCurrentDay
            : highestProfit;
  }, 0);

  console.log(maxProfit);
  console.timeEnd('1');
})
