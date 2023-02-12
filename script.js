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



function playRound (getComputerChoice, playerSelection) {
    let lowCaseSelection = playerSelection.toLowerCase();
    let playerChoice = playerSelection.charAt(0).toUpperCase() + lowCaseSelection.slice(1);
    if (getComputerChoice == playerChoice) {
        return "Draw";
    }
    else return "To be decided"; // other results to be added where a side wins
}