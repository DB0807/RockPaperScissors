//scores of the game
let playerScore = document.querySelector ('.pScore')
let livePlayerScore = 0;
playerScore.classList.add ('scores');

let computerScore = document.querySelector ('.cScore')
let liveComputerScore = 0;
computerScore.classList.add ('scores');

//function to obtain computers selection for the game
function getComputerChoice () {
    let choice = Math.floor (Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } 
    else if (choice == 1) {
        return "Paper";
    }
    else return "Scissors";
}

//function to run outcomes
function playRound (playerSelection, computerSelection) { 
    switch (true) {
        case (playerSelection == computerSelection):
            return "draw";
        case (playerSelection == "Rock" && computerSelection == "Scissors"):
            return "player wins";
        case (playerSelection == "Rock" && computerSelection == "Paper"):
            return "computer wins";
        case (playerSelection == "Paper" && computerSelection == "Rock"):
            return "player wins";
        case (playerSelection == "Paper" && computerSelection == "Scissors"):
            return "computer wins";
        case (playerSelection == "Scissors" && computerSelection == "Paper"):
            return "player wins";
        case (playerSelection == "Scissors" && computerSelection == "Rock"):
            return "computer wins";
        default:
            return "Error";
    }
}