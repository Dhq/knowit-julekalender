import fs from 'fs';

console.time('1');
let fileName = './inputs/2016-8.txt';
let file = fs.readFile(fileName, 'utf-8', (err, content) => {
    const turns = content.split(/\n/).map((x) => parseInt(x));
    const ladders = [[3,17], [8,10], [15,44], [22,5], [39,56], [49,75], [62,45], [64,19], [65,73], [80,12], [87,79]];
    const endField = 90;
    const nrOfPlayers = 1337;
    let initialBoard = Array.from(new Array(1337)).map(() => 1)
    let initialState = { currentPlayer: 0, winner: null, laddersClimbed: 0, board: initialBoard };

    const result = turns.reduce((state, turn, i) => {
        if(state.winner !== null) return state;
        let newState = Object.assign(state);

        //If first round, set player to 1
        if(i < nrOfPlayers) {
            newState.board[newState.currentPlayer] = 1;
        }

        var goesTo = newState.board[newState.currentPlayer] + turn;

        for (let ladder of ladders) {
            if(ladder[0] == goesTo) {
                goesTo = ladder[1];
                newState.laddersClimbed++;
                break;
            }
        }

        if(goesTo < endField) {
            newState.board[state.currentPlayer] = goesTo;
        }

        if(goesTo == endField)  {
            newState.winner = newState.currentPlayer;
            return newState;
        }

        newState.currentPlayer = newState.currentPlayer >= (nrOfPlayers - 1) ? 0 : state.currentPlayer + 1;
        return newState;
    }, initialState);

    console.log((result.currentPlayer + 1) * result.laddersClimbed);
    console.timeEnd('1');
})

