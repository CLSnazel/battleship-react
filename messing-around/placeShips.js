
const boardArray = [ [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ] ]; 


const randomlyPlaceShips = function (b) {
  let count = 5; 
  for(let i = 0; i < count; i++) {
    let randCol = Math.floor(Math.random() * 9); 
    let randRow = Math.floor(Math.random() * 9); 
    if(b[randRow][randCol] === '🚢') {
      count--; 
    } else {
      b[randRow][randCol] = '🚢'
    }
  }

  return b; 
}

console.log(randomlyPlaceShips(boardArray)); 

const initBoard = function() {
  const newRow = []; 
  const board = []; 
  for(let i = 0; i < 10; i++) {
    newRow.push('🌊'); 
  }
  for(let i = 0; i < 10; i ++) {
    board.push(newRow); 
  }
  return board; 
}


// console.log(randomlyPlaceShips(board));

// const initBoard = function(b, callback) {
//   let newRow = [];
//   for (let j = 0; j < 10; j++) {
//     newRow.push('🌊');
//   }
//   for(let i = 0; i < 10; i++){
//     b.push(newRow);
//   }
//   return randomlyPlaceShips(b); 
// }; 



// console.log(initBoard(board)); 
