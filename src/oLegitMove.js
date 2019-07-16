const oLegitMove = (i, j, reversi) => {
  const cond0 = (i, j) => {
    return reversi[i][j] === '.';
  };

  // searching up
  const cond1 = (i, j) => {
    let legit = true;
    if (i > 1 && reversi[i - 1][j] === 'X') {
      for (let a = i - 2; a >= 0; a--) {
        if (legit && reversi[a][j] === 'O') return true;

        if (reversi[a][j] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching down
  const cond2 = (i, j) => {
    let legit = true;
    if (i < 6 && reversi[i + 1][j] === 'X') {
      for (let a = i + 2; a <= 7; a++) {
        if (legit && reversi[a][j] === 'O') return true;

        if (reversi[a][j] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching right
  const cond3 = (i, j) => {
    let legit = true;
    if (j < 6 && reversi[i][j + 1] === 'X') {
      for (let a = j + 2; a <= 7; a++) {
        if (legit && reversi[i][a] === 'O') return true;

        if (reversi[i][a] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching left
  const cond4 = (i, j) => {
    let legit = true;
    if (j > 1 && reversi[i][j - 1] === 'X') {
      for (let a = j - 2; a >= 0; a--) {
        if (legit && reversi[i][a] === 'O') return true;

        if (reversi[i][a] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching down-right
  const cond5 = (i, j) => {
    let legit = true;
    if (i < 6 && j < 6 && reversi[i + 1][j + 1] === 'X') {
      let a = i + 1;
      let b = j + 1;
      while (a < 7 && b < 7) {
        a++;
        b++;
        if (legit && reversi[a][b] === 'O') return true;

        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching up-left
  const cond6 = (i, j) => {
    let legit = true;
    if (i > 1 && j > 1 && reversi[i - 1][j - 1] === 'X') {
      let a = i - 1;
      let b = j - 1;
      while (a > 0 && b > 0) {
        a--;
        b--;
        if (legit && reversi[a][b] === 'O') return true;

        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching up-right
  const cond7 = (i, j) => {
    let legit = true;
    if (i > 1 && j < 6 && reversi[i - 1][j + 1] === 'X') {
      let a = i - 1;
      let b = j + 1;
      while (a > 0 && b < 7) {
        a--;
        b++;
        if (legit && reversi[a][b] === 'O') return true;

        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  // searching down-left
  const cond8 = (i, j) => {
    let legit = true;
    if (i < 6 && j > 1 && reversi[i + 1][j - 1] === 'X') {
      let a = i + 1;
      let b = j - 1;
      while (a < 7 && b > 0) {
        a++;
        b--;
        if (legit && reversi[a][b] === 'O') return true;
        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return false;
  };

  return (
    cond0(i, j) &&
    (cond1(i, j) ||
      cond2(i, j) ||
      cond3(i, j) ||
      cond4(i, j) ||
      cond5(i, j) ||
      cond6(i, j) ||
      cond7(i, j) ||
      cond8(i, j))
  );
};

export default oLegitMove;
