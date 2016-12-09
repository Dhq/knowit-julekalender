import fs from 'fs';

console.time('1');
let fileName = './inputs/2016-9.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
    const transactions = content.split(/\n/);

    let data = transactions.reduce((accounts, current) => {
        let transaction = current.split(',');
        let amount = parseInt(transaction[2]);

        if(accounts[transaction[0]] !== "None") {
            accounts[transaction[0]] = !accounts[transaction[0]] ? 0 : accounts[transaction[0]];
            accounts[transaction[0]] -= amount;
        }

        accounts[transaction[1]] = !accounts[transaction[1]] ? 0 : accounts[transaction[1]];
        accounts[transaction[1]] += amount;
 
        return accounts;
    }, []);

    let res = Object.keys(data).filter((id) => data[id] > 10).length;
    console.log(res);

    console.timeEnd('1');
})

