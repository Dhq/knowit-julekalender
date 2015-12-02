import fs from 'fs';

console.time('1');
let fileName = './inputs/2.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
  let lines = content.split(/\n/);

  let result = lines.reduce((prev, curr, i) => {
    let currFloat = parseFloat(curr);
    let maxWinOnCurrent = lines.slice(0, i-1).reduce((prev1, curr1, i) => {
      let diff = currFloat - parseFloat(curr1);
      return diff > prev1 ? diff : prev1;
    }, 0);

    return maxWinOnCurrent > prev ? maxWinOnCurrent : prev;
  }, 0);

  console.log(result);
  console.timeEnd('1');
})
