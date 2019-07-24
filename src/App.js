import React, { Component } from 'react';
import './App.css';

import reversiInit from './Board/reversiInit';
import xLegitMove from './X/xLegitMove';
import xMove from './X/xMove';
import nextOMove from './O/nextOMove';
import Board from './Board/Board';

class App extends Component {
  state = { reversi: reversiInit};
  reversi = [...this.state.reversi];

  clickHandler = (i, j) => {
    if (xLegitMove(i, j, this.reversi)) {
      for (let a = 10; a < 18; a++){
        this.reversi[a] = [0, 0, 0, 0, 0, 0, 0, 0];
      }
      this.reversi = xMove(i, j, this.reversi);
      this.reversi[8] = false;
      this.setState({ reversi: this.reversi });
      setTimeout(() => {
        for (let a = 10; a < 18; a++){
          this.reversi[a] = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        this.setState({ reversi: this.reversi });
        setTimeout(() => {
          this.reversi = nextOMove(this.reversi);
          this.setState({ reversi: this.reversi });
        }, 500);
      }, 1500);
    }
  };

  passHandler = () => {
    setTimeout(() => {
      this.reversi[8] = true;
      this.reversi = nextOMove(this.reversi);
      this.setState({ reversi: this.reversi });
    }, 2000);
  };

  render() {
    return (
      <div className="App">
        <header style={{ color: '', fontFamily: 'Verdana', fontSize: '100px' }}>
          O t h e l l o
        </header>
        <Board
          reversi={this.state.reversi}
          click={this.clickHandler}
          passClick={this.passHandler}
        />
      </div>
    );
  }
}

export default App;
