import React, { Component } from 'react';
import './App.css';

class App extends Component {
  reversi = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', 'O', '.', '.'],
    ['.', '.', 'O', 'O', 'X', '.', '.', '.'],
    ['.', '.', '.', 'X', 'O', 'O', '.', '.'],
    ['.', '.', 'O', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
  ];

  boardStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    fontWeight: 'bold',
    border: '1px solid',
    padding: '0 10px',
    cursor: 'pointer',
    width: '20px'
  };

  legitMove = (i, j) => {
    const cond0 = (i, j) => {
      return this.reversi[i][j] === '.';
    };

    // searching up
    const cond1 = (i, j) => {
      let legit = true;
      if (i > 1 && this.reversi[i - 1][j] === 'O') {
        for (let a = i - 2; a >= 0; a--) {
          if (legit && this.reversi[a][j] === 'X') {
            for (let b = a + 1; b < i; b++) {
              this.reversi[b][j] = 'X';
            }
            return true;
          }
          if (this.reversi[a][j] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching down
    const cond2 = (i, j) => {
      let legit = true;
      if (i < 6 && this.reversi[i + 1][j] === 'O') {
        for (let a = i + 2; a <= 7; a++) {
          if (legit && this.reversi[a][j] === 'X') {
            for (let b = a - 1; b > i; b--) {
              this.reversi[b][j] = 'X';
            }
            return true;
          }
          if (this.reversi[a][j] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching right
    const cond3 = (i, j) => {
      let legit = true;
      if (j < 6 && this.reversi[i][j + 1] === 'O') {
        for (let a = j + 2; a <= 7; a++) {
          if (legit && this.reversi[i][a] === 'X') {
            for (let b = a - 1; b > j; b--) {
              this.reversi[i][b] = 'X';
            }
            return true;
          }
          if (this.reversi[i][a] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching left
    const cond4 = (i, j) => {
      let legit = true;
      if (j > 1 && this.reversi[i][j - 1] === 'O') {
        for (let a = j - 2; a >= 0; a--) {
          if (legit && this.reversi[i][a] === 'X') {
            for (let b = a + 1; b < j; b++) {
              this.reversi[i][b] = 'X';
            }
            return true;
          }
          if (this.reversi[i][a] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching down-right
    const cond5 = (i, j) => {
      let legit = true;
      if (i < 6 && j < 6 && this.reversi[i + 1][j + 1] === 'O') {
        let a = i + 1;
        let b = j + 1;
        while (a < 7 && b < 7) {
          a++;
          b++;
          if (legit && this.reversi[a][b] === 'X') {
            while (a > i) {
              a--;
              b--;
              this.reversi[a][b] = 'X';
            }
            return true;
          }
          if (this.reversi[a][b] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching up-left
    const cond6 = (i, j) => {
      let legit = true;
      if (i > 1 && j > 1 && this.reversi[i - 1][j - 1] === 'O') {
        let a = i - 1;
        let b = j - 1;
        while (a > 0 && b > 0) {
          a--;
          b--;
          if (legit && this.reversi[a][b] === 'X') {
            while (a < i) {
              a++;
              b++;
              this.reversi[a][b] = 'X';
            }
            return true;
          }
          if (this.reversi[a][b] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching up-right
    const cond7 = (i, j) => {
      let legit = true;
      if (i > 1 && j < 6 && this.reversi[i - 1][j + 1] === 'O') {
        let a = i - 1;
        let b = j + 1;
        while (a > 0 && b < 7) {
          a--;
          b++;
          if (legit && this.reversi[a][b] === 'X') {
            while (a < i) {
              a++;
              b--;
              this.reversi[a][b] = 'X';
            }
            return true;
          }
          if (this.reversi[a][b] !== 'O') {
            legit = false;
          }
        }
      }
      return false;
    };

    // searching down-left
    const cond8 = (i, j) => {
      let legit = true;
      if (i < 6 && j > 1 && this.reversi[i + 1][j - 1] === 'O') {
        let a = i + 1;
        let b = j - 1;
        while (a < 7 && b > 0) {
          a++;
          b--;
          if (legit && this.reversi[a][b] === 'X') {
            while (a > i) {
              a--;
              b++;
              this.reversi[a][b] = 'X';
            }
            return true;
          }
          if (this.reversi[a][b] !== 'O') {
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

  nextMove = (i, j) => {
    this.reversi[i][j] = 'X';
  };

  clickHandler = (i, j) => {
    if (this.legitMove(i, j)) {
      this.nextMove(i, j);
      this.forceUpdate();
    }
  };

  createTable = () => {
    let table = [];
    for (let i = 0; i < 8; i++) {
      let children = [];
      for (let j = 0; j < 8; j++) {
        children.push(
          <span
            onClick={this.clickHandler.bind(this, i, j)}
            style={this.boardStyle}
          >
            {this.reversi[i][j]}
          </span>
        );
      }
      table.push(<div>{children}</div>);
    }
    return table;
  };

  render() {
    return (
      <div className="App">
        <header style={{ color: 'blue', fontSize: '100px' }}>
          R e v e r s i
        </header>
        <div>{this.createTable()}</div>
      </div>
    );
  }
}
export default App;
