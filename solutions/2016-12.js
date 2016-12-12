const msg = 'Your message was received with gratitude! We do not know about you, but Christmas is definitely our favourite holiday. The tree, the lights, all the presents to unwrap. Could there be anything more magical than that?! We wish you a happy holiday and a happy new year!';
// const msg = 'a!Bc';
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
                  .reduce((acc, current, i) => { acc[current] = i+1; return acc; }, []);

let arr = msg.replace(/[^a-z]/gi, '').toLowerCase().split('').reverse();

const roman = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII'];

let res = arr
          .reduce((acc, current, i) => { 
            let nr = alphabet[current] / 2;
            let first = Math.round(nr);
            let second = Math.floor(nr);
            acc.push([first, second]);
            return acc;
          }, [])
          .reduce((acc, current, i) => {
            acc.unshift(roman[current[0]]);
            acc.push(roman[current[1]]);
            return acc;
          }, [])

console.log(res.join(', '));
