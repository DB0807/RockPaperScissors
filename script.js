let round;
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

//function to play the rounds and give final result
function game () {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt ("Rock, Paper, Scissors?");
        let result = playRound(playerSelection, computerSelection);  
        if (result == "draw"){
            console.log("Tie!");
        }
        else if (result == "player wins") {
            playerScore += 1;

            console.log(`Scores - Player: ${playerScore}, Computer: ${computerScore}`);
        }
        else if (result == "computer wins") {
            computerScore += 1;
            console.log(`Scores - Player: ${playerScore}, Computer: ${computerScore}`);
        }
        else console.log("error");
    }

    if (playerScore > computerScore) {
        //add console.log() final score
        return "You beat the computer!";
    }
    else if (playerScore < computerScore) {
        return "Unluck, you lost!";
    }
    else return "It's a Tie!";
}