const findEnds = require('./findEnds'); 
const checkForShips = require('./checkForShips'); 
const addEachShipTile = require('./addEachShipTile');
const checkDirection = require('./checkDirection'); 

const board = 
[ [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ] ]; 

  const placeShip = function (size, board) {
    const distance = size - 1;
    let newBoard = board.map(function(arr) {
      return arr.slice();
       });
    let startCol;
    let startRow;
    do {
      startCol = Math.floor(Math.random() * 9); 
      startRow = Math.floor(Math.random() * 9); 
    } while(newBoard[startRow][startCol] !== '🌊'); 
    const startPoint = [startRow, startCol]; 
    console.log(startPoint); 
    // get endPoints 
    const endPoints = findEnds(startRow, startCol, distance); 
    // check direction
    for(const end of endPoints) {
      const direction = checkDirection(startPoint, end);
      console.log('end:', end, 'direction:', direction); 
      const boats = checkForShips(startPoint, newBoard, direction, size); 
      console.log('there are boats:', boats); 
      if(!boats) {
        newBoard = addEachShipTile(startPoint, newBoard, direction, size); 
        return newBoard; 
      }
    }
  };


const ship1 = placeShip(5, board); 
const ship2 = placeShip(5, ship1); 
const ship3 = placeShip(5, ship2); 
const ship4 = placeShip(5, ship3); 
const ship5 = placeShip(5, ship4); 

const print = function(board) {
  console.log('   A B C D E F G H I J');
  let rowCount = 1;
  board.map(row => {
    let rowCountString = rowCount.toString();
    if(rowCountString.length < 2){
      rowCountString += " ";
    }
    console.log(rowCountString, row.join(''));
    rowCount += 1;
  });
}

print(ship5); 