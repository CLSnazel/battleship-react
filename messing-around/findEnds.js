const findEnds = (startRow, startCol, distance) => {
  let endPoints = [[startRow - distance, startCol], //endpoint up
                  [startRow + distance, startCol], //endpoint down
                  [startRow, startCol - distance], //endpoint left
                  [startRow, startCol + distance]]; //endpoint right                 
    //if endpoints are not within board bounds, remove them
    for (let i = endPoints.length - 1; i >= 0; i--) {
     //is the row within bounds?        
      if(endPoints[i][0] < 0 || endPoints[i][0] > 9){
      endPoints.splice(i, 1);
      } else if(endPoints[i][1] < 0 || endPoints[i][1] > 9 ) {
      //is the col in bounds?
      endPoints.splice(i, 1);
      }
    }
    // check if boat at end points ??? 
    return endPoints; 
  }; 
 
  module.exports = findEnds; 