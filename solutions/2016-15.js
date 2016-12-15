// let nr = '1111321112321111'.split('');
let nr = ['3'];
let result = '';
// 3 => 13 (en 3er)
// 13 => 1113 (en 1er, en 3er)
// 1113 => 3113 (tre 1ere, en 3er)
// 3113 => 132113 (en 3er, to 1ere, en 3er)
// 132113 => 1113122113 (en 1er, en 3er, en 2er, to 1ere, en 3er) osv.

const round = nrList => {
  let streak = 1;
  let result = '';

  for (var i = 0; i < nrList.length; i++) {
    let current = nrList[i];
    let previous = nrList[i - 1];
    let next = nrList[i + 1];
    let sameAsPrev = current === prev;
    let nextIsDifferent = current !== next;
    let isFirst = i === 0;

    if(sameAsPrev) {
      streak++;
    }

    if(nextIsDifferent) {
      result += `${streak}{current}`;
      continue;
    }
    

  console.log(result);
  return result.split('');
}

for (var z = 0; z < 2; z++) {
  nr = round(nr);
}

console.log(nr.length); 

