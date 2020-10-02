import React from 'react';
import BoardTile from './boardtile';

class BoardRow extends React.Component {

  render() {
    return(
      <tr>
        <td>{this.props.rowNum + 1}</td>
        {/* <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />
        <BoardTile showShips={this.props.showShips} />     */}
        {this.props.rowData.map((tile, index) => {
          return <BoardTile showShips={this.props.showShips} row={this.props.rowNum} col={index} ship={tile} parentCallback={this.props.parentCallback}/>
        })}
      </tr>
    );
  }
}

export default BoardRow;