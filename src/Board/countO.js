const countO = reversi => {
  let O = 0;
  for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      if (reversi[a][b] === 'O') {
        O++;
      }
    }
  }
  return O;
};

export default countO;
