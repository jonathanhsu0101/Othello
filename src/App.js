import React, { Component } from 'react';
import './App.css';
import reversiInit from './reversiInit';
import './boardStyle.css';
import './passStyle.css';
import xMove from './xMove';
import xLegitMove from './xLegitMove';
import endGame from './endGame';
import countX from './countX';
import countO from './countO';
import nextOMove from './nextOMove';

class App extends Component {
  reversi = reversiInit;

  clickHandler = (i, j) => {
    if (xLegitMove(i, j, this.reversi)) {
      this.reversi = xMove(i, j, this.reversi);
      this.reversi[8] = false;
      this.reversi = nextOMove(this.reversi);
      this.forceUpdate();
    }
  };

  passHandler = () => {
    this.reversi[8] = true;
    this.reversi = nextOMove(this.reversi);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <header style={{ color: 'blue', fontSize: '100px' }}>
          O t h e l l o
        </header>
        <div>{this.createTable()}</div>
      </div>
    );
  }

  createTable = () => {
    let table = [];
    for (let i = 0; i < 8; i++) {
      let children = [];
      for (let j = 0; j < 8; j++) {
        children.push(
          <span
            onClick={this.clickHandler.bind(this, i, j)}
            className="boardStyle"
          >
            {this.reversi[i][j]}
          </span>
        );
      }
      table.push(<div>{children}</div>);
    }
    if (endGame(this.reversi)) {
      let a = countX(this.reversi);
      let b = countO(this.reversi);
      if (a === b) {
        table.push(
          <div style={{ color: 'green', fontSize: '60px' }}>It's a tie!</div>
        );
        return table;
      }
      if (a < b) {
        table.push(
          <div style={{ color: 'green', fontSize: '60px' }}>Computer wins!</div>
        );
        return table;
      }
      if (a > b) {
        table.push(
          <div style={{ color: 'green', fontSize: '60px' }}>You win!</div>
        );
        return table;
      }
    }
    table.push(
      <button onClick={this.passHandler} className="passStyle">
        Pass
      </button>
    );
    return table;
  };
}

export default App;
