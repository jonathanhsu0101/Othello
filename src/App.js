import React, { Component } from 'react';
import './App.css';

import reversiInit from './Board/reversiInit';
import xLegitMove from './X/xLegitMove';
import xMove from './X/xMove';
import nextOMove from './O/nextOMove';
import Board from './Board/Board';

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
        <Board
          reversi={this.reversi}
          click={this.clickHandler}
          passClick={this.passHandler}
        />
      </div>
    );
  }
}

export default App;
