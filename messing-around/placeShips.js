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

  const placeShip = function (size, board, emoji) {
    const distance = size - 1;
    let newBoard = board.map(function(arr) {
      return arr.slice();
       });
    let startCol;
    let startRow;
    let boatAdded = false;
    while(!boatAdded){
      //pick random non-ship spot
      do {
        startCol = Math.floor(Math.random() * 9); 
        startRow = Math.floor(Math.random() * 9); 
      } while(newBoard[startRow][startCol] !== '🌊');
    
      const startPoint = [startRow, startCol]; 
      console.log(startPoint); 
      // get endPoints 
      const endPoints = findEnds(startRow, startCol, distance); 
      // check direction, remove endpoint if colliding
      for(let i = endPoints.length - 1; i >= 0; i--) {
        const direction = checkDirection(startPoint, endPoints[i]);
        console.log('end:', endPoints[i], 'direction:', direction); 
        const boats = checkForShips(startPoint, newBoard, direction, size); 
        console.log('there are boats:', boats); 
        if (boats) {
          //kill the endpoint
          endPoints.splice(i,1);
        }
        // if(!boats) {
        //   newBoard = addEachShipTile(startPoint, direction, size, newBoard, emoji); 
        //   boatAdded = true;
        //   break;
        // }
      }

      //check the remaining endpoints
      if(endPoints.length > 0) {
        // if endpoints.length > 0, coin toss to pick endpoint & add that ship
        let randomDirection = Math.floor(Math.random() * endPoints.length);
        let direction = checkDirection(startPoint, endPoints[randomDirection]);
        newBoard = addEachShipTile(startPoint, direction, size, newBoard, emoji );
        boatAdded = true;
      }
      

    }
    return newBoard; 
  };

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


const ship1 = placeShip(5, board, '🚢'); 
print(ship1); 
const ship2 = placeShip(4, ship1, '⛵'); 
print(ship2); 
const ship3 = placeShip(3, ship2, '🛹 '); 
print(ship3); 
const ship4 = placeShip(3, ship3, '🚣'); 
print(ship4); 
const ship5 = placeShip(2, ship4, '🏄'); 
print(ship5); 
