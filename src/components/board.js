import React from 'react';
import BoardRow from './boardrow';

const initBoard = function() {
  let board = [];
  let newRow = [];
  for (let j = 0; j < 10; j++) {
    newRow.push('🌊');
  }
  for(let i = 0; i < 10; i++){
    board.push(newRow);
  }
  return board;
}

const testBoard = [ 
  [ '', '', '', '', '', '', '', '', '', '' ],
[ '', '', '', '', '', '', '', '', '', '' ],
[ '', '', '', '', '', '', '', '', '', '' ],
[ '', '', '🚢', '🚢', '🚢', '🚢', '🚢', '', '', '' ],
[ '', '', '', '', '', '', '', '', '', '' ],
[ '', '', '', '', '', '⛵', '', '', '', '' ],
[ '', '', '', '', '', '⛵', '', '', '', '' ],
[ '', '', '', '', '', '⛵', '', '', '', '' ],
[ '', '', '', '', '', '⛵', '', '', '', '' ],
[ '', '', '', '', '', '', '', '', '', '' ] ]

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardArray:testBoard,
    }
  }

  updateBoardTile(row, col, newState) {
    let tempArr = this.state.boardArray;
    tempArr[row][col] = newState;
    this.setState({boardArray:tempArr});
  }
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>A</th>
            <th>B</th>
            <th>A</th>
            <th>B</th>
            <th>A</th>
            <th>B</th>
            <th>A</th>
            <th>B</th>
          </tr>
        </thead>
        <tbody>
          {/* <BoardRow showShips={this.props.showShips} rowNum={1}/>
          <BoardRow showShips={this.props.showShips} rowNum={2}/>
          <BoardRow showShips={this.props.showShips} rowNum={3}/>
          <BoardRow showShips={this.props.showShips} rowNum={4}/>
          <BoardRow showShips={this.props.showShips} rowNum={5}/>
          <BoardRow showShips={this.props.showShips} rowNum={6}/>
          <BoardRow showShips={this.props.showShips} rowNum={7}/>
          <BoardRow showShips={this.props.showShips} rowNum={8}/>
          <BoardRow showShips={this.props.showShips} rowNum={9}/>
          <BoardRow showShips={this.props.showShips} rowNum={10}/> */}
          {this.state.boardArray.map((boardRow, index) => {
            return <BoardRow showShips={this.props.showShips} rowNum={index} rowData={boardRow} parentCallback={this.updateBoardTile.bind(this)}/>
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    );
  }
}

export default Board;