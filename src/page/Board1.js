import React from 'react';

class Board1 extends React.Component {
  
  boardStyle = {
    fontFamily: 'monospace',
    fontSize: '40px',
    fontWeight: 'bold',
    border: '1px solid',
    padding: '0 10px',
    cursor: 'pointer',
    width: '20px'
  };
  
  createTable = (props) => {
    const reversi = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', 'O', 'X', '.', '.', '.'],
      ['.', '.', '.', 'X', 'O', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.']
    ];

    let table = [];
    for (let i = 0; i < 8; i++) {
      let children = [];
      for (let j = 0; j < 8; j++) {
        children.push(<span style={this.boardStyle}>{reversi[i][j]}</span>);
      }
      table.push(<div>{children}</div>);
    }
    return table;
  };
  
  render() {
    return <div>{this.createTable()}</div>;
  };
}
export default Board1;
