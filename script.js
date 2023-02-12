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

function playRound (playerSelection, getComputerChoice) { //should getComputerChoice be something else and be assigned to func in code block?
    const lowCaseSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + lowCaseSelection.slice(1);
    if (playerSelection == getComputerChoice) {
        return "Draw";
    }
    else if (playerSelection == "Rock" && getComputerChoice == "Scissors"){
        return "You Win, +1 Point!";
    }
    else if (playerSelection == "Rock" && getComputerChoice == "Paper"){
    return "You Lose, +1 point for the computer!";
    }
    else if (playerSelection == "Paper" && getComputerChoice == "Rock"){
        return "You Win, +1 Point!";
    }
    else if (playerSelection == "Paper" && getComputerChoice == "Scissors"){
        return "You Lose, +1 point for the computer!";
    }
    else if (playerSelection == "Scissors" && getComputerChoice == "Paper"){
        return "You Win, +1 Point!";
    }
    else if (playerSelection == "Scissors" && getComputerChoice == "Rock"){
        return "You Lose, +1 point for the computer!";
    }
    else return "Error";
}