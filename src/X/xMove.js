const xMove = (i, j, reversi) => {
  // searching up
  const cond1 = (i, j, reversi) => {
    let legit = true;
    if (i > 1 && reversi[i - 1][j] === 'O') {
      for (let a = i - 2; a >= 0; a--) {
        if (legit && reversi[a][j] === 'X') {
          for (let b = a + 1; b < i; b++) {
            reversi[b][j] = 'X';
            reversi[b + 10][j] = 1;
          }
          return reversi;
        }
        if (reversi[a][j] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching down
  const cond2 = (i, j, reversi) => {
    let legit = true;
    if (i < 6 && reversi[i + 1][j] === 'O') {
      for (let a = i + 2; a <= 7; a++) {
        if (legit && reversi[a][j] === 'X') {
          for (let b = a - 1; b > i; b--) {
            reversi[b][j] = 'X';
            reversi[b + 10][j] = 1;
          }
          return reversi;
        }
        if (reversi[a][j] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching right
  const cond3 = (i, j, reversi) => {
    let legit = true;
    if (j < 6 && reversi[i][j + 1] === 'O') {
      for (let a = j + 2; a <= 7; a++) {
        if (legit && reversi[i][a] === 'X') {
          for (let b = a - 1; b > j; b--) {
            reversi[i][b] = 'X';
            reversi[i + 10][b] = 1;
          }
          return reversi;
        }
        if (reversi[i][a] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching left
  const cond4 = (i, j, reversi) => {
    let legit = true;
    if (j > 1 && reversi[i][j - 1] === 'O') {
      for (let a = j - 2; a >= 0; a--) {
        if (legit && reversi[i][a] === 'X') {
          for (let b = a + 1; b < j; b++) {
            reversi[i][b] = 'X';
            reversi[i + 10][b] = 1;
          }
          return reversi;
        }
        if (reversi[i][a] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching down-right
  const cond5 = (i, j, reversi) => {
    let legit = true;
    if (i < 6 && j < 6 && reversi[i + 1][j + 1] === 'O') {
      let a = i + 1;
      let b = j + 1;
      while (a < 7 && b < 7) {
        a++;
        b++;
        if (legit && reversi[a][b] === 'X') {
          while (a > i + 1) {
            a--;
            b--;
            reversi[a][b] = 'X';
            reversi[a + 10][b] = 1;
          }
          return reversi;
        }
        if (reversi[a][b] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching up-left
  const cond6 = (i, j, reversi) => {
    let legit = true;
    if (i > 1 && j > 1 && reversi[i - 1][j - 1] === 'O') {
      let a = i - 1;
      let b = j - 1;
      while (a > 0 && b > 0) {
        a--;
        b--;
        if (legit && reversi[a][b] === 'X') {
          while (a < i - 1) {
            a++;
            b++;
            reversi[a][b] = 'X';
            reversi[a + 10][b] = 1;
          }
          return reversi;
        }
        if (reversi[a][b] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching up-right
  const cond7 = (i, j, reversi) => {
    let legit = true;
    if (i > 1 && j < 6 && reversi[i - 1][j + 1] === 'O') {
      let a = i - 1;
      let b = j + 1;
      while (a > 0 && b < 7) {
        a--;
        b++;
        if (legit && reversi[a][b] === 'X') {
          while (a < i - 1) {
            a++;
            b--;
            reversi[a][b] = 'X';
            reversi[a + 10][b] = 1;
          }
          return reversi;
        }
        if (reversi[a][b] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  // searching down-left
  const cond8 = (i, j, reversi) => {
    let legit = true;
    if (i < 6 && j > 1 && reversi[i + 1][j - 1] === 'O') {
      let a = i + 1;
      let b = j - 1;
      while (a < 7 && b > 0) {
        a++;
        b--;
        if (legit && reversi[a][b] === 'X') {
          while (a > i + 1) {
            a--;
            b++;
            reversi[a][b] = 'X';
            reversi[a + 10][b] = 1;
          }
          return reversi;
        }
        if (reversi[a][b] !== 'O') {
          legit = false;
        }
      }
    }
    return reversi;
  };

  reversi[i][j] = 'X';
  reversi[i+10][j] = 1;
  reversi = cond1(i, j, reversi);
  reversi = cond2(i, j, reversi);
  reversi = cond3(i, j, reversi);
  reversi = cond4(i, j, reversi);
  reversi = cond5(i, j, reversi);
  reversi = cond6(i, j, reversi);
  reversi = cond7(i, j, reversi);
  reversi = cond8(i, j, reversi);
  return reversi;
};

export default xMove;
