const players = {
  wizard: true,
  warrior: true,
  priest: true,
  thief: true,
};
let survivors = 0;

for (let i = 1; i <= 100; i++) {
  let aliveGoblins = i;
  let priestUsedResurrect = false;

  while (aliveGoblins > 0) {
    if (players.thief) aliveGoblins--;
    if (players.wizard) aliveGoblins -= 10;
    if (players.warrior) aliveGoblins--;

    if (players.priest && !priestUsedResurrect) {
      if (players.warrior === false) {
        players.warrior = true;
        priestUsedResurrect = true;
      } else if (players.wizard === false) {
        players.wizard = true;
        priestUsedResurrect = true;
      }
    }

    if (players.thief && !players.priest && !players.wizard && !players.warrior) {
      survivors += aliveGoblins;
      break;
    }

    if (aliveGoblins >= (getAlive(players).length * 10)) {
      if (players.warrior) {
        players.warrior = false;
      } else if (players.wizard) {
        players.wizard = false;
      } else if (players.priest) {
        players.priest = false;
      }
    }
  }

  if (!players.warrior) delete players.warrior;
  if (!players.wizard) delete players.wizard;
  if (!players.priest) delete players.priest;
}

console.log(17 + Object.keys(players).length + survivors);

function getAlive(pl) {
  return Object.keys(pl).filter(key => pl[key]);
}
