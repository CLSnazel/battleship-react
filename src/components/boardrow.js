import React from 'react';
import BoardTile from './boardtile';

class BoardRow extends React.Component {

  render() {
    return(
      <tr>
        <td>{this.props.rowNum}</td>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>
        <BoardTile/>    
      </tr>
    );
  }
}

export default BoardRow;