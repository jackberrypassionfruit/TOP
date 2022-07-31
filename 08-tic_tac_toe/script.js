// Game board/displayController is a MODULE
const gameBoard = (() => {
  // private methods
  let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

  function clearBoard() {
    gameBoard.board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  }
  

  function checkWin(board) {
    // Check for wins horizontally
    for (let i = 0; i<3; i++) {
      if (board[i][0] == board[i][1] && board[i][1]== board[i][2]) {
        return true;
      }
    }

    // Check for wins vertically
    for (let i = 0; i<3; i++) {
      if (board[0][i] == board[1][i] && board[1][i]== board[2][i]) {
        return true;
      }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] || board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      return true
    }
  }

  function update(i, j, turn) {
    board[i][j] = turn;
  }
  
  return { 
    // public methods
    board,
    update,
    checkWin,
    clearBoard
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
    
    gBoard.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div');
      row.classList.add("row");

      for (let j = 0; j < 3; j++) {
        const button = document.createElement('button');
        button.classList.add("btn");

        button.textContent = `${board[i][j]}`
        button.addEventListener('click', (e) => {
          if (button.textContent == " ") {
            const turn = _turn(board);
            button.textContent = turn;
            gameBoard.update(i, j, turn);
            console.table(gameBoard.board);
          }
        })
        row.appendChild(button);
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
const playerFactory = (name, turn) => {
  // Stuff they are/can do
  function win(name) {
    const winBox = document.getElementsByClassName('winBox')[0];
    winBox.textContent = `${name} Wins!`
  }
  
  // return all relavent propeties and methods
  return {
    name, 
    win
  };
}

// Main Script
const addPlayer1 = document.getElementById('addPlayer1');
addPlayer1.addEventListener('click', (e) => {
  const plrName1 = document.getElementById("names1").value;
  window.plr1 = playerFactory(plrName1);
  document.getElementById('plr1').innerHTML = plrName1;
})

const addPlayer2 = document.getElementById('addPlayer2');
addPlayer2.addEventListener('click', (e) => {
  const plrName2 = document.getElementById("names2").value;
  window.plr2 = playerFactory(plrName2);
  document.getElementById('plr2').innerHTML = plrName2;

})

const start = document.getElementById('go');
start.addEventListener('click', (e) => {
  //Trying to clear the board for a new game, screws everything up
  // I think it has to do with the function scope, and how board = [...] doesn't apply everywhere
  displayController.renderBoard(gameBoard.board);
});