import React, { Component } from 'react';
import './App.css';

class App extends Component {
  reversi = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'O', 'X', '.', '.', '.'],
    ['.', '.', '.', 'X', 'O', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
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
    const cond1 = (i, j) => {
      return this.reversi[i][j] === '.';
    };

    const cond2 = (i, j) => {
      let legit = true;
      console.log('i = ' + i);
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

    return cond1(i, j) && cond2(i, j);
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
        <div>{this.createTable()}</div>;
      </div>
    );
  }
}
export default App;
