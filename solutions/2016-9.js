import fs from 'fs';

const fileName = './inputs/2016-9.txt';
fs.readFile(fileName, 'utf-8', (err, content) => {
  const transactions = content.split(/\n/);
  const data = transactions.reduce((accounts, current) => {
    const transaction = current.split(',');
    const amount = parseInt(transaction[2], 0);
    const newAccounts = Object.assign(accounts);

    newAccounts[transaction[0]] = !newAccounts[transaction[0]] ? 0 : newAccounts[transaction[0]];
    newAccounts[transaction[0]] -= amount;

    newAccounts[transaction[1]] = !newAccounts[transaction[1]] ? 0 : newAccounts[transaction[1]];
    newAccounts[transaction[1]] += amount;

    return newAccounts;
  }, []);

  const res = Object.keys(data).filter(id => data[id] > 10).length;
  console.log(res);
});
