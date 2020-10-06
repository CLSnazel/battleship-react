const assert = require('chai').assert;
const checkForShips  = require('../messing-around/checkForShips'); 
// boats at [2,4] [3, 4] [4, 4] [5, 4] [6, 4]
const verticalBoard = 
[ [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🚢', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🚢', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🚢', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🚢', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🚢', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ] ]; 
// boats at [2, 4] [2, 5] [2, 6], [2, 7] [2, 8]
const horizontalBoard = 
[ [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🚢', '🚢', '🚢', '🚢', '🚢', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ],
  [ '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊', '🌊' ] ]; 

describe("#checkForShips", () => {
  // up direction
  it("returns true if there IS a boat in between a starting and ending point (up direction)", () => {
    assert.strictEqual(checkForShips([6,4], verticalBoard, 'up', 5), true);
  });
  it("returns false if there is NO boat in between a starting and ending point (up direction)", () => {
    assert.strictEqual(checkForShips([6,6], verticalBoard, 'up', 5), false);
  });
  // down direction 
  it("returns true if there IS a boat in between a starting and ending point (down direction)", () => {
    assert.strictEqual(checkForShips([2,4], verticalBoard, 'down', 5), true);
  });
  it("returns false if there is NO boat in between a starting and ending point (down direction)", () => {
    assert.strictEqual(checkForShips([5,7], verticalBoard, 'down', 5), false);
  });
  // left direction 
  it("returns true if there IS a boat in between a starting and ending point (left direction)", () => {
    assert.strictEqual(checkForShips([2,8], horizontalBoard, 'left', 5), true);
  });
  it("returns false if there is NO boat in between a starting and ending point (left direction)", () => {
    assert.strictEqual(checkForShips([3,4], horizontalBoard, 'left', 5), false);
  });
    // right direction 
    it("returns true if there IS a boat in between a starting and ending point (right direction)", () => {
      assert.strictEqual(checkForShips([2, 4], horizontalBoard, 'right', 5), true);
    });
    it("returns false if there is NO boat in between a starting and ending point (right direction)", () => {
      assert.strictEqual(checkForShips([3,4], horizontalBoard, 'right', 5), false);
    });

});