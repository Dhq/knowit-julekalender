console.time('time');

let totalFridays = 0;
let currentDayIndex = 4;
let currentYear = 1;

while(currentYear < 2016) {
  currentDayIndex = currentDayIndex + (256 % 7) - 7;
  console.log(currentDayIndex);
  currentYear++;
}


function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.timeEnd('time');
