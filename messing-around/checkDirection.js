const checkDirection = (start, end) => {
  if(start[0] - end[0] < 0) { 
    return 'down'; 
  } else if (start[0] - end[0] > 0){
    return 'up'
  } else if (start[1] - end[1] < 0) {
    return 'right'; 
  } else {
    return 'left'; 
  }
}; 

module.exports = checkDirection; 