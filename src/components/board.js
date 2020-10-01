import React from 'react';
import BoardRow from './boardrow';

class Board extends React.Component {

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
          <BoardRow rowNum={1}/>
          <BoardRow rowNum={2}/>
          <BoardRow rowNum={3}/>
          <BoardRow rowNum={4}/>
          <BoardRow rowNum={5}/>
          <BoardRow rowNum={6}/>
          <BoardRow rowNum={7}/>
          <BoardRow rowNum={8}/>
          <BoardRow rowNum={9}/>
          <BoardRow rowNum={10}/>
        </tbody>
        <tfoot></tfoot>
      </table>
    );
  }
}

export default Board;