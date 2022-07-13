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
    console.log(`You Win! ${plr} beats ${cpu}`)
    return 1;
  }

  else if ((plr == "paper" && cpu == "rock") || (plr == "scissors" && cpu == "paper") || (plr == "rock" && cpu == "scissors"))
  {
    console.log(`You Lose! ${cpu} beats ${plr}`);
    return -1;
  }

  else
  {
    console.log("it's a tie");
    return 0;
  }
}
function game()
{
  let plrWins = 0;
  let cpuWins = 0;
  for (let i = 0; i < 5; i++)
  {
    plrMove = prompt('Make your move');

    score = playRound(plrMove, computerPlay());
    console.log(score)

    switch (score)
    {
      case 1:
        plrWins++;
        break;
      case -1:
        cpuWins++;
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

  return `Player 1: ${plrWins} --- Player 2: ${cpuWins}`
}