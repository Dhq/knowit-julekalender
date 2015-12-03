//Programmererenes dag feires hvert år på den 256. dagen (eller 2^8. dagen om du vil) i året.
//Hvor mange ganger fra og med år 1 til og med år 2015 har dette forekommet på en fredag om en antar at 1. januar
//år 1 var en fredag i, samt at dagens skuddårsregler og kalendersystem har vært gjeldende i hele perioden?
//Hint: Skuddår er forøvrig et år som er delelig på 4 og ikke 100 med mindre det er delelig på 400
//OBS: Er blitt gjort oppmerksom på et avvik i oppgaven. Svaret som er lagt inn på oppgaven later til å anta at den første dagen i året er den "nulte" dagen i året.

console.time('time');

let totalFridays = 0;
let currentDayIndex = 4;
let programmerDayIndex = 256;

for (var year = 1; year < 2016; year++) {
  currentDayIndex = getDayFromIndex(currentDayIndex, programmerDayIndex);
  if(currentDayIndex === 4) totalFridays++;

  let totalDaysOfYear = isLeapYear(year) ? 366 : 365;
  let daysTilNextYear = totalDaysOfYear - programmerDayIndex + 1;
  currentDayIndex = getDayFromIndex(currentDayIndex, daysTilNextYear);
}


console.log(`Total fridays: ${totalFridays}`);

function getDayFromIndex(start, end) {
  return (start + (end % 7)) % 7;
}

function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.timeEnd('time');
