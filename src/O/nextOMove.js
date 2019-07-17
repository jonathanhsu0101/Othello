import allOLegitMove from './allOLegitMove';
import oMove from './oMove';
import bestOMove from './bestOMove';

const nextOMove = reversi => {
  let b = allOLegitMove(reversi);
  if (b.length > 0) {
    let a = bestOMove(b, reversi);
    reversi = oMove(a.i, a.j, reversi);
    reversi[9] = false;
  } else {
    reversi[9] = true;
  }

  return reversi;
};

export default nextOMove;
