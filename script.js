let playerPoints = 0;
let computerPoints = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const playGame = (playerSelection, computerSelection) => {
  //checking if playerSelection is valid
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    return "Invalid input - this game doesn't count!";
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerPoints++;
      return "Computer";
    } else {
      playerPoints++;
      return "Player";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerPoints++;
      return "Computer";
    } else {
      playerPoints++;
      return "Player";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerPoints++;
      return "Computer";
    } else {
      playerPoints++;
      return "Player";
    }
  }
};

//queryselectors
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");
const userChoice = document.querySelector(".user-choice");
const computerChoice = document.querySelector(".computer-choice");
const reset = document.querySelector(".reset");
const final = document.querySelector(".final");

//event listeners
rock.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  const gameResult = playGame(playerSelection, computerSelection);
  winner.textContent = gameResult;
  userChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  console.log(playerPoints, computerPoints);
  checkIfGameOver();
});

paper.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  const gameResult = playGame(playerSelection, computerSelection);
  winner.textContent = gameResult;
  userChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  console.log(playerPoints, computerPoints);
  checkIfGameOver();
});

scissors.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  const gameResult = playGame(playerSelection, computerSelection);
  winner.textContent = gameResult;
  userChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  console.log(playerPoints, computerPoints);
  checkIfGameOver();
});

reset.addEventListener("click", function () {
  playerPoints = 0;
  computerPoints = 0;
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  winner.textContent = "";
  userChoice.textContent = "";
  computerChoice.textContent = "";
  final.textContent = "";
  enableButtons();
});

//function that checks if the game is over
const checkIfGameOver = () => {
  if (playerPoints === 5 || computerPoints === 5) {
    final.textContent = "Game over!";
    if (playerPoints > computerPoints) {
      final.textContent += " You won!";
    } else {
      final.textContent += " Computer won!";
    }
    disableButtons();
  } else {
    final.textContent = "";
  }
};

//function which disable
const disableButtons = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
};

//function which enable
const enableButtons = () => {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
};
