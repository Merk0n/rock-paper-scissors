const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      console.log("Computer chose rock");
      return "rock";
    case 1:
      console.log("Computer chose paper");
      return "paper";
    case 2:
      console.log("Computer chose scissors");
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
      return "Computer wins!";
    } else {
      playerPoints++;
      return "Player wins!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerPoints++;
      return "Computer wins!";
    } else {
      playerPoints++;
      return "Player wins!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerPoints++;
      return "Computer wins!";
    } else {
      playerPoints++;
      return "Player wins!";
    }
  }
};

let playerPoints = 0;
let computerPoints = 0;

// loop game 5 times
while (playerPoints < 5 && computerPoints < 5) {
  let playerSelection = prompt("Choose rock, paper or scissors");
  playerSelection = playerSelection.toLowerCase();
  console.log(playGame(playerSelection, getComputerChoice()));
}

// check who won
if (playerPoints > computerPoints) {
  console.log("*Player won the game!*");
} else if (playerPoints < computerPoints) {
  console.log("*Computer won the game!*");
} else {
  console.log("*It's a tie!*");
}

console.log("xd");
