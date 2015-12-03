//Lenken http://pastebin.com/sJVZp7BH inneholder en liste av tall. Den første linja inneholder prisen på en aksje på dag 1,
//den andre linja inneholder prisen på den samme aksjen på dag 2 og så videre.
//Gitt at du kun har lov til å gjøre én transaksjon, hva er den høyeste fortjenesten du kan oppnå gitt de vedlagte aksjeprisene?
//En transaksjon betyr at du kjøper en aksje før du, én eller flere dager senere, selger den igjen.
//Svar skal oppgis med fire desimaler. Bruk punktum som desimalskilletegn. Eksempel: 12.2446

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
