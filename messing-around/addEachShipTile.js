const addEachShipTile = (start, direction, size, board) => {
  const newBoard = board.map(function(arr) {
    return arr.slice();
     });
  const rowCoord = start[0]; 
  const colCoord = start[1]; 
  if(direction === 'right') {
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord][colCoord + i] = '🚢'; 
      }
    } else if (direction === 'left') {
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord][colCoord - i] = '🚢';
      } 
    } else if (direction === 'up') {
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord - i][colCoord] = '🚢'; 
      }
    } else { // down 
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord + i][colCoord] = '🚢';
      }
    }
    return newBoard; 
  }; 

  module.exports = addEachShipTile; 


