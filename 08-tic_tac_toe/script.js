// Game board/displayController is a MODULE
const gameBoard = (() => {
  // private methods
  let board = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push("X");
    }
    board.push(row);
  }
  

  return { 
    // return an object of the public methods
    board
  };
})();

const displayController = ((board) => {
  // private methods

  return { 
    // return an object of the public methods

  };
})();

// Players are FACTORIES
const player = (name) => {
  // Stuff they are/can do


  // return all relavent propeties and methods
  return {name};
}

console.log(gameBoard.board);