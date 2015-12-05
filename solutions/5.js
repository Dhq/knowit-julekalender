import fs from 'fs';

console.time('ran');
let fileName = './inputs/5.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
  let splittedLines = content.split(/\r\n/);
  let lines = {};
  let result = splittedLines.reduce((count, current) => {
    let wordArray = current.split('').sort().join();
    lines[wordArray] = (lines[wordArray] || 0) + 1;

    return lines[wordArray] > 1 ?
           (lines[wordArray] == 2 ? count + 2 : count + 1)
           : count;
  }, 0);

  console.log(`Anagrams found: ${result}`);
  console.timeEnd('ran');
});
