let playerScore = 0;
let computerScore = 0;
////////////////////////////////////////////////////RANDOM CHOICE LOGIC
function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
let choices = ["ROCK", "PAPER", "SCISSOR"];
/////////////////////////////////////////////RPC LOGIC AND RESULT TEXTS
let attemps = 5;
let playerSelection = "";
let computerSelection = getComputerChoice(choices);
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerScore++, attemps--;
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSOR") {
    playerScore++, attemps--;
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    playerScore++, attemps--;
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
    computerScore++, attemps--;
  } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER") {
    playerScore++, attemps--;
  } else if (playerSelection == "SCISSOR" && computerSelection == "ROCK") {
    computerScore++, attemps--;
  } else if (playerSelection === getComputerChoice(choices)) {
    attemps--
  }
  document.getElementById("result").innerHTML =
    "YOU => " +
    playerSelection +
    "<br><br>" +
    "COMPUTER => " +
    computerSelection +
    "<br><br><br>";
  document.getElementById("scores").innerHTML =
    "YOUR SCORE = " +
    "[" +
    playerScore +
    "]" +
    "<br><br>" +
    "COMPUTER SCORE = " +
    "[" +
    computerScore +
    "]" +
    "<br><br><br>" +
    "AVAILABLE ROUND(S) = " +
    "[" +
    attemps +
    "]";
}
//////////////////////////////////////////////////////////BUTTONS INPUT
const buttons = document.querySelectorAll("input");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value, getComputerChoice(choices));
  });
});
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    disablebuttons();
  });
});
function disablebuttons() {
  if (attemps == 0 && playerScore > computerScore) {
    buttons.forEach((elem) => {
      elem.disabled = true;
    }),
      alert("YOU WIN");
  } else if (attemps == 0 && computerScore > playerScore) {
    buttons.forEach((elem) => {
      elem.disabled = true;
    }),
      alert("YOU LOSE");
  } else if (attemps == 0 && playerScore == computerScore){
    buttons.forEach((elem) => {
      elem.disabled = true;
    }),
      alert("TIE");
  }
}
