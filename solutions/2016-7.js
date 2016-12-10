import fs from 'fs';

console.time('1');
let fileName = './inputs/2016-7.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
    let lines = content.split(/\n/);

    let res = lines.reduce((currentLocations, line) => {
        let meters = parseInt(line.match(/[0-9]+/g));
        let direction =  line.match(/\b(\w+)\W$/g);

        if(direction == "north\r") {
            currentLocations.north += meters;
        }
        if(direction == "south\r") {
            currentLocations.north -= meters;
        }
        if(direction == "east\r") {
            currentLocations.west -= meters;
        }
        if(direction == "west\r") {
            currentLocations.west += meters;
        }
        return currentLocations;

    }, {north: 0, west: 0});

    console.log(`${res.north}, ${res.west}`);


    console.timeEnd('1');
})
