const endGame = reversi => {
  // no space
  let noSpace = true;
  for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      if (reversi[a][b] === '.') {
        noSpace = false;
      }
    }
  }

  // X eats all O
  let xEatsAllO = true;
  for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      if (reversi[a][b] === 'O') {
        xEatsAllO = false;
      }
    }
  }

  // O eats all X
  let oEatsAllX = true;
  for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      if (reversi[a][b] === 'X') {
        oEatsAllX = false;
      }
    }
  }

  // X pass then O pass
  let xPassOPass = false;
  if (reversi[8] === true && reversi[9] === true) {
    xPassOPass = true;
  }

  let endGame = noSpace || xEatsAllO || oEatsAllX || xPassOPass;
  return endGame;
};

export default endGame;
