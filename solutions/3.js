console.time('time');

let totalFridays = 0;
let currentDayIndex = 4;
let currentYear = 1;
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
