import fs from 'fs';

console.time('ran');
let fileName = './inputs/5.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
  let splittedLines = content.split(/\r\n/);
  let lines = [];
  let result = 0;
  splittedLines.forEach((current) => {
    let wordArray = current.split('').sort().join();
    if(wordArray.length > 0) lines.push(wordArray);
  });

  let counts = {};
  lines.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
  for (var c in counts) {
    if (counts.hasOwnProperty(c) && counts[c] > 1) {
      result += counts[c];
    }
  }
  console.log(`Anagrams found: ${result}`);
  console.timeEnd('ran');
});
