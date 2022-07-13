// Only thing I don't love about this is that the tournament at the end doesn't show te score in real time. Eh.

function computerPlay()
{
  const randint = Math.floor(Math.random() * 3);

  switch (randint)
  {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection)
{
  plr = playerSelection.toLowerCase();
  cpu = computerSelection.toLowerCase();

  if ((plr == "rock" && cpu == "paper") || (plr == "paper" && cpu == "scissors") || (plr == "scissors" && cpu == "rock"))
  {
    document.querySelector('#result').innerText = `You Win! ${plr} beats ${cpu}`;
    return 1;
  }

  else if ((plr == "paper" && cpu == "rock") || (plr == "scissors" && cpu == "paper") || (plr == "rock" && cpu == "scissors"))
  {
    document.querySelector('#result').innerText = `You Lose! ${plr} loses to ${cpu}`;
    return -1;
  }

  else
  {
    document.querySelector('#result').innerText = "it's a tie";
    return 0;
  }
}

function game()
{
  let plrWins = 0;
  let cpuWins = 0;
  while (plrWins < 5 && cpuWins < 5)
  {
    
    plrMove = prompt('Make your move');

    score = playRound(plrMove, computerPlay());

    switch (score)
    {
      case 1:
        plrWins++;
        document.querySelector('#plr1').innerHTML = plrWins;
        break;
      case -1:
        cpuWins++;
        document.querySelector('#plr2').innerHTML = cpuWins;
        break;
    }
  }


  if (plrWins > cpuWins)
  {
    console.log('Player 1 is the ultimate champion!')
  }

  else if (cpuWins > plrWins)
  {
    console.log('Player 2 is the ultimate champion!')
  }

  else
  {
    console.log('How did you end up in a draw? I mean seriously')
  }

  // return `Player 1: ${plrWins} --- Player 2: ${cpuWins}`
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', addPlay, false);
paper.addEventListener('click', addPlay, false);
scissors.addEventListener('click', addPlay, false);

function addPlay(e)
{
  playRound(e.currentTarget.classList[1], computerPlay());
}

// "Less Smart" Way , without using the clicing target

// rock.addEventListener('click', () => {
//   playRound('rock', computerPlay());
// });

// paper.addEventListener('click', () => {
//   playRound('paper', computerPlay());
// });

// scissors.addEventListener('click', () => {
//   playRound('scissors', computerPlay());
// });

