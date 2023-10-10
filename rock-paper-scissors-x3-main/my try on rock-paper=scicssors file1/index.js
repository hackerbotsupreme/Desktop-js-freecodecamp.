const userchoiceDisplay = document.getElementById("UserChoice");
const ComputerchoiceDisplay = document.getElementById("ComputerChoice");
const reultDisplay = document.getElementById("Result");
const choices = document.querySelectorAll("button");
let UserChoice;
choices.forEach((parameter) =>
  parameter.addEventListener("click", (e) => {
    UserChoice = e.target.id;
    userchoiceDisplay.innerHTML = UserChoice;
    computerChoice();
    reusult();
  })
);
let ComputerChoice;
function computerChoice() {
  let radomnumber = Math.floor(Math.random() * 3) + 1;
  if (radomnumber === 1) {
    ComputerChoice = "Rock";
  }
  if (radomnumber === 2) {
    ComputerChoice = "Paper";
  }
  if (radomnumber === 3) {
    ComputerChoice = "Scicssors";
  }
  ComputerchoiceDisplay.innerHTML = ComputerChoice;
}
let Result;
function reusult() {
  if (ComputerChoice === UserChoice) {
    Result = "It's a draw";
  }
  if (ComputerChoice === "Rock" && UserChoice === "Paper") {
    Result = "you win!";
  }
  if (ComputerChoice === "Rock" && UserChoice === "Scicssors") {
    Result = "you lost!";
  }
  if (ComputerChoice === "Paper" && UserChoice === "Scicssors") {
    Result = "you win!";
  }
  if (ComputerChoice === "Paper" && UserChoice === "Rock") {
    Result = "you lose!";
  }
  if (ComputerChoice === "Scicssors" && UserChoice === "Rock") {
    Result = "you win!";
  }
  if (ComputerChoice === "Scicssors" && UserChoice === "Paper") {
    Result = "you lose!";
  }
  reultDisplay.innerHTML = Result;
}
