import oLegitMove from './oLegitMove';

const allOLegitMove = reversi => {
  let allOLegitMove = [];
  for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      if (oLegitMove(a, b, reversi)) {
        allOLegitMove.push({ i: a, j: b });
      }
    }
  }
  return allOLegitMove;
};

export default allOLegitMove;
