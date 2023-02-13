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

function playRound (playerSelection, computerSelection) { //should getComputerChoice be something else and be assigned to func in code block?

    const lowCaseSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + lowCaseSelection.slice(1); // should put in string?

    if (playerSelection == computerSelection) {
        return "Draw";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win, +1 Point!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper"){
    return "You Lose, +1 point for the computer!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win, +1 Point!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose, +1 point for the computer!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You Win, +1 Point!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose, +1 point for the computer!";
    }
    else return "Error";
}

function game () {
    const playerSelection = prompt ("Rock, Paper, Scissors?"); 
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "You Win, +1 Point!") {
        console.log("yay");
    }
    else console.log("nay");

}