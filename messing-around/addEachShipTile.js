const addEachShipTile = (start, direction, size, board, emoji) => {
  const newBoard = board.map(function(arr) {
    return arr.slice();
     });
  const rowCoord = start[0]; 
  const colCoord = start[1]; 
  if(direction === 'right') {
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord][colCoord + i] = emoji; 
      }
    } else if (direction === 'left') {
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord][colCoord - i] = emoji;
      } 
    } else if (direction === 'up') {
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord - i][colCoord] = emoji; 
      }
    } else { // down 
      for(let i = 0; i < size; i++) {
        newBoard[rowCoord + i][colCoord] = emoji;
      }
    }
    return newBoard; 
  }; 

  module.exports = addEachShipTile; 


