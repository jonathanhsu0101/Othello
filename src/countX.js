const countX = reversi => {
  let X = 0;
  for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      if (reversi[a][b] === 'X') {
        X++;
      }
    }
  }
  return X;
};

export default countX;
