let playerScore = 0;
let computerScore = 0;

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
    const lowCaseSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + lowCaseSelection.slice(1);

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