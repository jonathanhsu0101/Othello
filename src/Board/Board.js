import React from 'react';
import endGame from './endGame';
import countX from './countX';
import countO from './countO';
import './boardStyle.css';
import './passStyle.css';

const board = props => {
  let table = [];
  for (let i = 0; i < 8; i++) {
    let children = [];
    for (let j = 0; j < 8; j++) {
      children.push(
        <span
          key={i * 8 + j}
          onClick={props.click.bind(this, i, j)}
          className="boardStyle"
        >
          {props.reversi[i][j]}
        </span>
      );
    }
    table.push(<div>{children}</div>);
  }
  if (endGame(props.reversi)) {
    let a = countX(props.reversi);
    let b = countO(props.reversi);
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
    <div>
      <span style={{ fontSize: '35px' }}>X: {countX(props.reversi)}</span>
      <button onClick={props.passClick} className="passStyle">
        Pass
      </button>
      <span style={{ fontSize: '35px' }}>O: {countO(props.reversi)}</span>
    </div>
  );
  return table;
};

export default board;
