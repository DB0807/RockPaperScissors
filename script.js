const rockBtn = document.querySelector ('.rock');
const paperBtn = document.querySelector ('.paper');
const scissorsBtn = document.querySelector ('.scissors');
let outcomeDiv = document.querySelector ('.outcome');
let result;

//create outcome display
const displayOutcome = document.createElement ('p')
displayOutcome.classList.add('scores');
outcomeDiv.appendChild(displayOutcome);

//scores of the game
let playerScore = document.querySelector ('.pScore')
playerScore.classList.add ('scores');
playerScore.textContent = parseInt('0');

let computerScore = document.querySelector ('.cScore')
computerScore.classList.add ('scores');
computerScore.textContent = parseInt('0');

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
        case (playerSelection === computerSelection):
            return "draw";
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
            return "player wins";
        case (playerSelection === "Rock" && computerSelection === "Paper"):
            return "computer wins";
        case (playerSelection === "Paper" && computerSelection === "Rock"):
            return "player wins";
        case (playerSelection === "Paper" && computerSelection === "Scissors"):
            return "computer wins";
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            return "player wins";
        case (playerSelection === "Scissors" && computerSelection === "Rock"):
            return "computer wins";
        default:
            return "Error";
    }
};

//buttons for each player selection to start a round
rockBtn.addEventListener('click', () => (
    playerSelection = 'Rock',
    computerSelection = getComputerChoice(),
    result = playRound(playerSelection, computerSelection),
    outcome(result, playerSelection, computerSelection, playerScore, computerScore)
));

paperBtn.addEventListener('click', () => (
    playerSelection = 'Paper',
    computerSelection = getComputerChoice(),
    result = playRound(playerSelection, computerSelection),
    outcome(result, playerSelection, computerSelection, playerScore, computerScore)
));

scissorsBtn.addEventListener('click', () => (
    playerSelection = 'Scissors',
    computerSelection = getComputerChoice(),
    result = playRound(playerSelection, computerSelection),
    outcome(result, playerSelection, computerSelection, playerScore, computerScore)
));

//display choices and outcome of round
const outcome = (result, playerSelection, computerSelection, playerScore, computerScore) => {
    if (playerScore.textContent == '5') {
        displayOutcome.textContent = (`You have won!`);
    }
    else if (computerScore.textContent == '5') {
        displayOutcome.textContent = (`You have lost!`);
    }
    else if (result === "draw") {
        displayOutcome.textContent = (`You both chose ${playerSelection}, tie!`);
    }
    else if (result === "player wins") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        displayOutcome.textContent = (`${playerSelection} beats ${computerSelection}, you win!`);
    }
    else if (result === "computer wins") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        displayOutcome.textContent = (`${computerSelection} beats ${playerSelection}, you lose!`);
    }
    else  displayOutcome.textContent = ('oops');
}