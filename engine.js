let choices = ["rock", "paper", "scissors"];
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;

const liveResult = document.getElementById("result");
liveResult.innerText = `Computer: ${COMPUTER_SCORE} VS Player: ${PLAYER_SCORE}`;
const resultH1 = document.createElement('h1');





const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener('click', playRound);

const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener('click', playRound);

const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener('click', playRound);


function getComputerChoice() {
  // Played against computer
  return choices[Math.floor(Math.random() * choices.length)];
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

  }
}


function playRound(e) {
  // Plays just one round
  let computerSelection = getComputerChoice();

  result = processChoices(computerSelection, e.target.id);

  switch (result) {
    case 0:
      resultH1.innerText = `Computer chose ${computerSelection}. Tie.`;

      break;
    case 1:
      resultH1.innerText = `Computer chose ${computerSelection}. You win.`;
      PLAYER_SCORE++;
      break;
    case 2:
      resultH1.innerText = `Computer chose ${computerSelection}. Computer wins.`;
      COMPUTER_SCORE++;
      break;
    case -1:
      resultH1.innerText = "That is not an option...";
      break;
  }

  liveResult.innerText = `Computer: ${COMPUTER_SCORE} VS Player: ${PLAYER_SCORE}`;
  liveResult.appendChild(resultH1);

  if (COMPUTER_SCORE >= 5  || PLAYER_SCORE >= 5)
  {
    printResult();
  }

}

function printResult() {
  // Prints result


  resultH1.innerText = PLAYER_SCORE > COMPUTER_SCORE
    ? "Player wins the game."
    : PLAYER_SCORE == COMPUTER_SCORE
      ? "Match ends in a tie"
      : "Computer wins the game."

      buttonRock.removeEventListener('click', playRound);
      
      buttonPaper.removeEventListener('click', playRound);
      
      buttonScissors.removeEventListener('click', playRound);

}
