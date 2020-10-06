const checkForShips = (start, board, direction, size) => {
  const rowCoord = start[0];
  const colCoord = start[1]; 
  if(direction === 'up') {
    for(let i = 1; i < size; i++) {
      if(board[rowCoord - i][colCoord] !== '🌊') {
        return true;
      }
    }
    return false; 
  } else if (direction === 'down') {
    for(let i = 1; i < size; i++) {
      if(board[rowCoord + i][colCoord] !== '🌊') {
        return true;
      }
    }
    return false; 
  } else if (direction === 'right') {
    for(let i = 1; i < size; i++) {
      if(board[rowCoord][colCoord + i] !== '🌊') {
        return true;
      }
    } 
    return false; 
  } else { // left
    for(let i = 1; i < size; i++) {
      if(board[rowCoord][colCoord - i] !== '🌊') {
        return true;
      }
    }
    return false; 
  }
}; 

module.exports = checkForShips; 