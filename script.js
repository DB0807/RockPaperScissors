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
    //change below to switch statement?
    if (playerSelection == computerSelection) {
        return "draw";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "player wins";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
    return "computer wins";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "player wins";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "computer wins";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "player wins!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "computer wins";
    }
    else return "Error";
}