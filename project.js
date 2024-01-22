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

let playerChoice = prompt("enter rock, paper, or scissors");
playerChoice = playerChoice.toLowerCase();
let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
