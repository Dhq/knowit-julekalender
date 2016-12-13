import fs from 'fs';

const fileName = './inputs/2016-13.txt';
console.log("befoire net");
const size = 9999;
var net = new Array(size);
for (var i = 0; i < net.length; i++) {
  net[i] = new Array(size).map(x => 1);
}

console.log("after net",net);
fs.readFile(fileName, 'utf-8', (err, content) => {
  const res = content
    .split(/\n/)
    .map(s => {
      if(typeof(s) === "undefined" || s === '') return [];

      let action = s.match(/(turn off|toggle|turn on)/gi)[0];
      let directions = s.match(/[0-9]+,[0-9]+/g)
        .map(s => s.split(','))
        .map(a => a.map(s => parseInt(s)));

      return {
        action,
        from: directions[0],
        to: directions[1]
      };
    })
    .reduce((net, current, i) => {
      if(current.action == 'turn off') {

      }
      else if(current.action == 'turn on') {

      }
      else {

      }

      // for (var i = 0, len = Things.length; i < len; i++) {
        
      // }

      return net;
    }, net);

  console.log();
});
