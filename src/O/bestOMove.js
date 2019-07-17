import oScore from './oScore';

const bestOMove = (allOLegitMove, reversi) => {
  let c = [];
  for (let d = 0; d < allOLegitMove.length; d++) {
    c.push(oScore(allOLegitMove[d], reversi));
  }
  let e = 0;
  for (let d = 0; d < allOLegitMove.length; d++) {
    if (c[d] > c[e]) {
      e = d;
    }
  }
  let bestOMove = allOLegitMove[e];

  return bestOMove;
};

export default bestOMove;
