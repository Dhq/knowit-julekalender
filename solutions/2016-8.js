import fs from 'fs';

console.time('1');
let fileName = './inputs/2016-8.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
    let turns = content.split(/\n/).map((x) => parseInt(x));
    const ladders = [[3,17], [8,10], [15,44], [22,5], [39,56], [49,75], [62,45], [64,19], [65,73], [80,12], [87,79]];
    let endField = 90;
    let nrOfPlayers = 3;
    let board = [];

    for(var i = 0; i < nrOfPlayers; i++) {
        board.push(1);
    }

    let result = turns.reduce((state, turn) => {
        if(state.winner !== null) return state;

        var goesTo = board[state.currentPlayer] + turn;
        if(goesTo == endField)  {
            state.winner = currentPlayer;
            return state;
        }

        for (let x of ladders) {
            if(x[0] == goesTo) {
                goesTo = x[1];
                state.laddersClimbed++;
                break;
            }
        }


        if(goesTo < endField)
            board[state.curentPlayer] = goesTo;

    
        state.currentPlayer = state.currentPlayer >= (nrOfPlayers - 1) ? 0 : state.currentPlayer + 1;
        return state;
    }, { currentPlayer: 0, winner: null, laddersClimbed: 0 });

    console.log(result);
    console.timeEnd('1');
})

