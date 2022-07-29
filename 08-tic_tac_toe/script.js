// Game board/displayController is a MODULE
const gameBoard = (() => {
  // private methods
  let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

  function update(i, j, turn) {
    board[i][j] = turn;
  }
  
  return { 
    // public methods
    board,
    update
  };
})();

const displayController = (() => {
  // private methods
  function _turn(board) {
    let x = 0;
    let o = 0;
    for (let i = 0; i<3; i++) {
      for (let j = 0; j<3; j++) {
        if (board[i][j] === "X") {
          x++;
        }
        else if (board[i][j] === "O") {
          o++;
        }
      }
    }
    if (x > o) {
      return "O";
    }
    else {return "X"};
  }
  
  function renderBoard(board) {
    const gBoard = document.getElementsByClassName("gBoard")[0];

    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add("row");

      for (let j = 0; j < 3; j++) {
        const box = document.createElement('div');
        box.classList.add("box");
        
        const button = document.createElement('button');
        button.classList.add("btn");

        button.textContent = `${board[i][j]}`
        button.addEventListener('click', (e) => {
          if (button.textContent == " ") {
            const turn = _turn(board);
            button.textContent = turn;
            gameBoard.update(i, j, turn);
          }
        })
        box.appendChild(button);
        row.appendChild(box);
      }
      gBoard.appendChild(row);
    };
  }

  return { 
    // return an object of the public methods
    renderBoard
  };
})();

// Players are FACTORIES
const player = (name) => {
  // Stuff they are/can do


  // return all relavent propeties and methods
  return {name};
}

displayController.renderBoard(gameBoard.board);