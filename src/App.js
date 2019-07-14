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
    // const cond2 = (i, j) => {
    //   const nextX = (i, j) => {
    //     let m = i - 2;
    //     while (m >= 0) {
    //       if (this.reversi[m][j] === 'X') break;
    //       m--;
    //     }
    //     return m;
    //   };
    //   console.log(nextX(i, j));

    //   let legit = true;
    //   if (nextX(i, j) < 0) {
    //     legit = false;
    //   }
    //   for (let m = nextX(i, j) + 1; (m = i - 1); m++) {
    //     if (this.reversi[m][j] !== 'O') {
    //       legit = false;
    //     }
    //   }

    //   return legit;
    // };

    const cond3 = (i,j) => {
      let legit = true;
      
    }

    // return cond1(i, j) && cond2(i, j);
    return cond1(i, j);
  };

  nextMove = (i, j) => {
    this.reversi[i][j] = 'X';
  };

  clickHandler = (i, j) => {
    if (this.legitMove(i, j)) {
      // if (true) {
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
