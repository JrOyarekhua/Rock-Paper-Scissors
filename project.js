function getComputerChoice() {
  const choiceArray = ["rock", "paper", "scissors"];
  // randomly return a choice from the array
  let randIndex = Math.floor(Math.random() * 3);
  let choice = choiceArray[randIndex];
  return choice;
}

console.log(getComputerChoice());
