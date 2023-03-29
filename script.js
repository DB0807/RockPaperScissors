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
//creates buttons for each player input
const rock = document.querySelector('.rock');
rock.textContent = "Rock";
rock.addEventListener ('click', () => {
    const result = playRound("Rock", getComputerChoice());
    displayOutcome(result);
    ScoreUpdate(result);
});

const paper = document.querySelector('.paper');
paper.textContent = "Paper";
paper.addEventListener ('click', () => {
    const result = playRound("Paper", getComputerChoice());
    displayOutcome(result);
    ScoreUpdate(result);
});

const scissors = document.querySelector('.scissors');
scissors.textContent = "Scissors";
scissors.addEventListener ('click', () => {
    const result = playRound("Scissors", getComputerChoice());
    displayOutcome(result);
    ScoreUpdate(result);
});

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

//displays the outcome of each round played
const outcome = document.querySelector ('.outcome');
function displayOutcome(result) {
    const outcomes = ["draw", "pWin", "cWin"];
    let outcomesIndex;
    if (result == "draw") {
        draw = document.createElement ('p');
         outcomesIndex = 0;
    }
    else if (result == "player wins") {
         outcomesIndex = 1;
    }
    else { 
         outcomesIndex = 2;
    }

    const outcomeDisplay = document.querySelector ('.outcome');
    outcomeDisplay.textContent = (outcomes[outcomesIndex]);
    outcomeDisplay.classList.add ('scores');
}

//updates and keeps track of the score
function ScoreUpdate (result) {
    if (result == "draw") {
        return;
    }
    else if (result == "player wins") {
        livePlayerScore += 1;
    }
    else if (result == "computer wins")
        liveComputerScore += 1;

    playerScore.textContent = `${livePlayerScore}`;
    computerScore.textContent = `${liveComputerScore}`;
}

