function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  // randomly return a choice from the array
  let randIndex = Math.floor(Math.random() * 3);
  let choice = choiceArray[randIndex];
  return choice;
}

function playRound(playerChoice, computerChoice) {
  // compare both selections and return winner
  let roundWinner;
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "paper") {
        roundWinner = "computer";
      } else if (computerChoice === "scissors") {
        roundWinner = "player";
      } else {
        roundWinner = "tie";
      }
      break;
    case "paper":
      if (computerChoice === "rock") {
        roundWinner = "player";
      } else if (computerChoice === "scissors") {
        roundWinner = "computer";
      } else {
        roundWinner = "tie";
      }
      break;
    case "scissors":
      if (computerChoice === "paper") {
        roundWinner = "player";
      } else if (computerChoice === "rock") {
        roundWinner = "computer";
      } else {
        roundWinner = "tie";
      }
      break;
  }

  if (roundWinner === "player") {
    return "you won the round";
  } else if (roundWinner === "computer") {
    return "you lost the round";
  } else {
    return "this round was a tie";
  }
}

// let playerChoice = prompt("enter rock, paper, or scissors");
// playerChoice = playerChoice.toLowerCase();
// let computerChoice = getComputerChoice();
// // console logs
// console.log(`you chose ${playerChoice}`);
// console.log(`the computer chose ${computerChoice}`);
// console.log(playRound(playerChoice, computerChoice));

function playGame() {
  // play 5 rounds and log each round
  // who ever wins the most rounds wins
  let computerWins = 0;
  let userWins = 0;
  let ties = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("enter rock, paper, or scissors");
    playerChoice = playerChoice.toLowerCase();
    console.log(`you chose ${playerChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`the computer chose ${computerChoice}`);
    let winner = playRound(playerChoice, computerChoice);
    console.log(winner);
    // track wins
    switch (winner) {
      case "you won the round":
        userWins += 1;
        break;
      case "you lost the round":
        computerWins += 1;
        break;
      case "this round was a tie":
        ties += 1;
        break;
    }
  }

  if (computerWins > userWins) {
    console.log("you lost the game");
  } else if (computerWins < userWins) {
    console.log("you won the game !");
  } else {
    console.log("The whole game was a tie");
  }
}

playGame();
