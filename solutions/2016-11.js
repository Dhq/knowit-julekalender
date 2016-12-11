import moment from 'moment';

const beginningOfTime = moment.utc('1970-01-01T00:00:00Z');
const int32Max = 2147483647;
const hoursInDay = 25;

const hours = int32Max / 60 / 60;
const days = Math.floor(hours / hoursInDay);
const seconds = ((hours / hoursInDay) % 1) * hoursInDay * 60 * 60;
const result = beginningOfTime.add(days, 'days').add(seconds, 'seconds');
console.log(`Answer: ${result.format()}`);
