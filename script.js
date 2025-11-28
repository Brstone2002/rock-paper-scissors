const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const display = document.querySelector(".display");
const playerDisplay = document.querySelector(".player-score");
const computerDisplay = document.querySelector(".computer-score");

let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

prompt("Make a choice to start game. First to 5 wins. Good luck.")


function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3) + 1;
    return randomInt === 1 ? 'rock' : randomInt === 2 ? 'paper' : 'scissors';
}


function playRound(humanChoice){
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
      display.textContent = `Tie: both chose ${humanChoice}.`;
      displayScore();
      return;
    }
    if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"){
      computerScore++;
      display.textContent = `You lose: ${computerChoice} beats ${humanChoice}.`;
      displayScore();
    } else {
      humanScore++;
      display.textContent = `You win: ${humanChoice} beats ${computerChoice}.`;
      displayScore();
    }

    if (humanScore === 5) {
      display.textContent = 'You reached 5 wins — you win the match!';
      displayScore();
      disableButtons();
    } else if (computerScore === 5) {
      display.textContent = 'Computer reached 5 wins — you lost the match.';
      displayScore();
      disableButtons();
    }
  }


function disableButtons(){
    rockBtn.disabled = paperBtn.disabled = scissorsBtn.disabled = true;
} 


function displayScore() {
    playerDisplay.textContent = `Player Score: ${humanScore}`;
    computerDisplay.textContent = `Computer Score: ${computerScore}`;
}