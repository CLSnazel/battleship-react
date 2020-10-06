import React from 'react';
import BoardRow from './boardrow';

const initBoard = function() {
  let board = [];
  let newRow = [];
  for (let j = 0; j < 10; j++) {
    newRow.push('');
  }
  for(let i = 0; i < 10; i++){
    board.push([...newRow]);
  }
  return board;
}

let testBoard = [
  [ '', '', '', '', '', '', '', '', '', '' ],
  [ '', '', '', '', '', '', '', '', '', '' ],
  [ '', '', '', '', '', '', '', '', '', '' ],
  [ '', '', '🚢', '🚢', '🚢', '🚢', '🚢', '', '', '' ],
  [ '', '', '', '', '', '', '', '', '', '' ],
  [ '', '', '', '', '', '⛵', '', '', '', '' ],
  [ '', '', '', '', '', '⛵', '', '', '', '' ],
  [ '', '', '', '', '', '⛵', '', '', '', '' ],
  [ '', '', '', '', '', '⛵', '', '', '', '' ],
  [ '', '', '', '', '', '', '', '', '', '' ] 
]

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // boardArray:[
      //   [ '', '', '', '', '', '', '', '', '', '' ],
      //   [ '', '', '', '', '', '', '', '', '', '' ],
      //   [ '', '', '', '', '', '', '', '', '', '' ],
      //   [ '', '', '🚢', '🚢', '🚢', '🚢', '🚢', '', '', '' ],
      //   [ '', '', '', '', '', '', '', '', '', '' ],
      //   [ '', '', '', '', '', '⛵', '', '', '', '' ],
      //   [ '', '', '', '', '', '⛵', '', '', '', '' ],
      //   [ '', '', '', '', '', '⛵', '', '', '', '' ],
      //   [ '', '', '', '', '', '⛵', '', '', '', '' ],
      //   [ '', '', '', '', '', '', '', '', '', '' ] 
      // ],
      boardArray:initBoard(),
    }
  }
  
  updateBoardTile(row, col, newState) {
    console.log("I am updating the board...");
    //let tempArr = [...this.state.boardArray];
    let tempArr = this.state.boardArray.slice();
    tempArr[row][col] = newState;
    this.setState({boardArray:tempArr.slice()});
  }
  render() {
    return(
      <table key={this.props.key}>
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
            return <BoardRow key={`${this.props.id}R${index}`} id={`${this.props.id}R${index}`} showShips={this.props.showShips} rowNum={index} rowData={boardRow} parentCallback={(row, col, newState) => this.updateBoardTile(row, col, newState)}/>
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    );
  }
}

export default Board;