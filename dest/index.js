'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.time('1');
var fileName = './inputs/2.txt';
var file = _fs2.default.readFile(fileName, 'utf-8', function (err, content) {
  var lines = content.split(/\n/);

  var result = lines.reduce(function (prev, curr, i) {
    var currFloat = parseFloat(curr);
    var maxWinOnCurrent = lines.slice(0, i - 1).reduce(function (prev1, curr1, i) {
      var diff = currFloat - parseFloat(curr1);
      return diff > prev1 ? diff : prev1;
    }, 0);

    return maxWinOnCurrent > prev ? maxWinOnCurrent : prev;
  }, 0);

  console.log(result);
  console.timeEnd('1');
});