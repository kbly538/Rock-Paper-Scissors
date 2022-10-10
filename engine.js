let choices = ["rock", "paper", "scissors"];
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

function getComputerChoice() {
  // Played against computer
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
  // Get player choice
  x = prompt("Make your choice! Rock, Paper or Scissors: ");
  return x ? x.toLowerCase() : null;
}

function processChoices(computerSelection, playerSelection) {
  // player wins: 1, computer wins:2, tie:1, wrong input: -1
  if (computerSelection == playerSelection) {
    return 0;
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "scissors") {
        return 1;
      } else if ((computerSelection = "paper")) {
        return 2;
      }
      break;

    case "paper":
      if (computerSelection == "rock") {
        return 1;
      } else if (computerSelection == "scissors") {
        return 2;
      }
      break;
    case "scissors":
      if (computerSelection == "paper") {
        return 1;
      } else if ((computerSelection = "rock")) {
        return 2;
      }
      break;
    default:
      return -1;
  }
}

function playRound(computerSelection, playerSelection) {
  // Plays just one round
  result = processChoices(computerSelection, playerSelection);

  switch (result) {
    case 0:
      console.log(`Computer chose ${computerSelection}. Tie.`);

      break;
    case 1:
      console.log(`Computer chose ${computerSelection}. You win.`);
      PLAYER_SCORE++;
      break;
    case 2:
      console.log(`Computer chose ${computerSelection}. Computer wins.`);
      COMPUTER_SCORE++;
      break;
    case -1:
      console.log("That is not an option...");
      break;
  }
}

function printResult() {
  // Prints result
  console.log(`Computer: ${COMPUTER_SCORE} VS Player: ${PLAYER_SCORE}`);
  console.log(
    PLAYER_SCORE > COMPUTER_SCORE
      ? "Player wins the game."
      : PLAYER_SCORE == COMPUTER_SCORE
      ? "Match ends in a tie"
      : "Computer wins the game."
  );
}

function playGame(numOfRounds) {
  // Loops playRound numOfRound times.
  for (let i = 0; i < numOfRounds; i++) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    playRound(computerSelection, playerSelection);
  }

  printResult();
}

playGame(5);
