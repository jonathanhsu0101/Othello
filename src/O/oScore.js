const oScore = (ij, reversi) => {
  let i = ij.i;
  let j = ij.j;

  // searching up
  const cond1 = (i, j) => {
    let legit = true;
    if (i > 1 && reversi[i - 1][j] === 'X') {
      for (let a = i - 2; a >= 0; a--) {
        if (legit && reversi[a][j] === 'O') return i - a - 1;

        if (reversi[a][j] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching down
  const cond2 = (i, j) => {
    let legit = true;
    if (i < 6 && reversi[i + 1][j] === 'X') {
      for (let a = i + 2; a <= 7; a++) {
        if (legit && reversi[a][j] === 'O') return a - i - 1;

        if (reversi[a][j] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching right
  const cond3 = (i, j) => {
    let legit = true;
    if (j < 6 && reversi[i][j + 1] === 'X') {
      for (let a = j + 2; a <= 7; a++) {
        if (legit && reversi[i][a] === 'O') return a - j - 1;

        if (reversi[i][a] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching left
  const cond4 = (i, j) => {
    let legit = true;
    if (j > 1 && reversi[i][j - 1] === 'X') {
      for (let a = j - 2; a >= 0; a--) {
        if (legit && reversi[i][a] === 'O') return j - a - 1;

        if (reversi[i][a] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching down-right
  const cond5 = (i, j) => {
    let legit = true;
    if (i < 6 && j < 6 && reversi[i + 1][j + 1] === 'X') {
      let a = i + 1;
      let b = j + 1;
      let c = 0;
      while (a < 7 && b < 7) {
        a++;
        b++;
        c++;
        if (legit && reversi[a][b] === 'O') return c;

        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching up-left
  const cond6 = (i, j) => {
    let legit = true;
    if (i > 1 && j > 1 && reversi[i - 1][j - 1] === 'X') {
      let a = i - 1;
      let b = j - 1;
      let c = 0;
      while (a > 0 && b > 0) {
        a--;
        b--;
        c++;
        if (legit && reversi[a][b] === 'O') return c;

        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching up-right
  const cond7 = (i, j) => {
    let legit = true;
    if (i > 1 && j < 6 && reversi[i - 1][j + 1] === 'X') {
      let a = i - 1;
      let b = j + 1;
      let c = 0;
      while (a > 0 && b < 7) {
        a--;
        b++;
        c++;
        if (legit && reversi[a][b] === 'O') return c;

        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // searching down-left
  const cond8 = (i, j) => {
    let legit = true;
    if (i < 6 && j > 1 && reversi[i + 1][j - 1] === 'X') {
      let a = i + 1;
      let b = j - 1;
      let c = 0;
      while (a < 7 && b > 0) {
        a++;
        b--;
        c++;
        if (legit && reversi[a][b] === 'O') return c;
        if (reversi[a][b] !== 'X') {
          legit = false;
        }
      }
    }
    return 0;
  };

  // Gold corner
  const cond9 = (i, j) => {
    if ((i === 0 || i === 7) && (j === 0 || j === 7)) {
      return 8;
    }
    return 0;
  };

  // Gold corner
  const cond10 = (i, j) => {
    if (i === 0 || i === 7 || j === 0 || j === 7) {
      return 4;
    }
    return 0;
  };

  let oScore =
    cond1(i, j) +
    cond2(i, j) +
    cond3(i, j) +
    cond4(i, j) +
    cond5(i, j) +
    cond6(i, j) +
    cond7(i, j) +
    cond8(i, j) +
    cond9(i, j) +
    cond10(i, j);
  return oScore;
};

export default oScore;
