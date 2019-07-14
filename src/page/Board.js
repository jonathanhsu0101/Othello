import React from 'react';

const Board = props => {
  const boardStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    fontWeight: 'bold',
    border: '1px solid',
    padding: '0 10px',
    cursor: 'pointer',
    width: '20px'
  };

  return (
    <div>
      <div>
        <span style={boardStyle}>{props.reversi[0][0]}</span>
        <span style={boardStyle}>{props.reversi[0][1]}</span>
        <span style={boardStyle}>{props.reversi[0][2]}</span>
        <span style={boardStyle}>{props.reversi[0][3]}</span>
        <span style={boardStyle}>{props.reversi[0][4]}</span>
        <span style={boardStyle}>{props.reversi[0][5]}</span>
        <span style={boardStyle}>{props.reversi[0][6]}</span>
        <span style={boardStyle}>{props.reversi[0][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[1][0]}</span>
        <span style={boardStyle}>{props.reversi[1][1]}</span>
        <span style={boardStyle}>{props.reversi[1][2]}</span>
        <span style={boardStyle}>{props.reversi[1][3]}</span>
        <span style={boardStyle}>{props.reversi[1][4]}</span>
        <span style={boardStyle}>{props.reversi[1][5]}</span>
        <span style={boardStyle}>{props.reversi[1][6]}</span>
        <span style={boardStyle}>{props.reversi[1][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[2][0]}</span>
        <span style={boardStyle}>{props.reversi[2][1]}</span>
        <span style={boardStyle}>{props.reversi[2][2]}</span>
        <span style={boardStyle}>{props.reversi[2][3]}</span>
        <span style={boardStyle}>{props.reversi[2][4]}</span>
        <span style={boardStyle}>{props.reversi[2][5]}</span>
        <span style={boardStyle}>{props.reversi[2][6]}</span>
        <span style={boardStyle}>{props.reversi[2][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[3][0]}</span>
        <span style={boardStyle}>{props.reversi[3][1]}</span>
        <span style={boardStyle}>{props.reversi[3][2]}</span>
        <span style={boardStyle}>{props.reversi[3][3]}</span>
        <span style={boardStyle}>{props.reversi[3][4]}</span>
        <span style={boardStyle}>{props.reversi[3][5]}</span>
        <span style={boardStyle}>{props.reversi[3][6]}</span>
        <span style={boardStyle}>{props.reversi[3][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[4][0]}</span>
        <span style={boardStyle}>{props.reversi[4][1]}</span>
        <span style={boardStyle}>{props.reversi[4][2]}</span>
        <span style={boardStyle}>{props.reversi[4][3]}</span>
        <span style={boardStyle}>{props.reversi[4][4]}</span>
        <span style={boardStyle}>{props.reversi[4][5]}</span>
        <span style={boardStyle}>{props.reversi[4][6]}</span>
        <span style={boardStyle}>{props.reversi[4][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[5][0]}</span>
        <span style={boardStyle}>{props.reversi[5][1]}</span>
        <span style={boardStyle}>{props.reversi[5][2]}</span>
        <span style={boardStyle}>{props.reversi[5][3]}</span>
        <span style={boardStyle}>{props.reversi[5][4]}</span>
        <span style={boardStyle}>{props.reversi[5][5]}</span>
        <span style={boardStyle}>{props.reversi[5][6]}</span>
        <span style={boardStyle}>{props.reversi[5][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[6][0]}</span>
        <span style={boardStyle}>{props.reversi[6][1]}</span>
        <span style={boardStyle}>{props.reversi[6][2]}</span>
        <span style={boardStyle}>{props.reversi[6][3]}</span>
        <span style={boardStyle}>{props.reversi[6][4]}</span>
        <span style={boardStyle}>{props.reversi[6][5]}</span>
        <span style={boardStyle}>{props.reversi[6][6]}</span>
        <span style={boardStyle}>{props.reversi[6][7]}</span>
      </div>
      <div>
        <span style={boardStyle}>{props.reversi[7][0]}</span>
        <span style={boardStyle}>{props.reversi[7][1]}</span>
        <span style={boardStyle}>{props.reversi[7][2]}</span>
        <span style={boardStyle}>{props.reversi[7][3]}</span>
        <span style={boardStyle}>{props.reversi[7][4]}</span>
        <span style={boardStyle}>{props.reversi[7][5]}</span>
        <span style={boardStyle}>{props.reversi[7][6]}</span>
        <span style={boardStyle}>{props.reversi[7][7]}</span>
      </div>
    </div>
  );
};

export default Board;
