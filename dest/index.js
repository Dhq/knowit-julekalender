'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.time('1');
var fileName = './inputs/2.txt';
var file = _fs2.default.readFile(fileName, 'utf-8', function (err, content) {
  var lines = content.split(/\n/);
  //Lowest number so far in the iteration
  var minSoFar = Number.MAX_VALUE;

  var maxProfit = lines.reduce(function (highestProfit, currentLine) {
    var currentLineFloat = parseFloat(currentLine);
    minSoFar = currentLineFloat < minSoFar ? currentLineFloat : minSoFar;
    var profitForCurrentDay = currentLineFloat - minSoFar;

    return profitForCurrentDay > highestProfit ? profitForCurrentDay : highestProfit;
  }, 0);

  console.log(maxProfit);
  console.timeEnd('1');
});