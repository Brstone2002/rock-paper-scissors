let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3) + 1;
    switch (randomInt){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}


function getHumanChoice(){
    let input = prompt(`Please pick "1" for Rock, "2" for Paper or "3" Scissors.`);
    switch (input){
        case "1":
            return "rock";
            break;
        case "2":
            return "paper";
            break;
        case "3":
            return "scissors";
            break;
    }
}


function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        console.log("It's a tie.");
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose, paper beats rock.");
        computerScore++;
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win, rock beats scissors.");
        humanScore++;
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win, paper beats rock.");
        humanScore++;
        return;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose, scissors beats paper.");
        computerScore++;
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose, rock beats scissors.");
        computerScore++;
        return;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win, scissors beats paper.");
        humanScore++;
        return;
    }
}


function playGame(){
    while (humanScore < 5 && computerScore < 5){
        playRound();
    }
    if (humanScore === 5){
        console.log(`You won 5 games and are declared the winner!`);
    }
    else if (computerScore === 5){
        console.log(`The computer has won 5 games and you have lost.`);
    }
}