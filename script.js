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
const playerScore = document.querySelector ('.pScore')
playerScore.classList.add ('scores');

const computerScore = document.querySelector ('.cScore')
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
    console.log(playerSelection),
    console.log(computerSelection),
    outcome(result, playerSelection, computerSelection)
));

paperBtn.addEventListener('click', () => (
    playerSelection = 'Paper',
    computerSelection = getComputerChoice(),
    result = playRound(playerSelection, computerSelection),
    console.log(playerSelection),
    console.log(computerSelection),
    outcome(result, playerSelection, computerSelection)
));

scissorsBtn.addEventListener('click', () => (
    playerSelection = 'Scissors',
    computerSelection = getComputerChoice(),
    result = playRound(playerSelection, computerSelection),
    console.log(playerSelection),
    console.log(computerSelection),
    outcome(result, playerSelection, computerSelection)
));

let outcome = (result, playerSelection, computerSelection) => {
    if (result === "draw") {
        displayOutcome.textContent = (`You both chose ${playerSelection}, tie!`);
    };
    if (result === "player wins") {
        displayOutcome.textContent = (`${playerSelection} beats ${computerSelection}, you win!`);
    };
    if (result === "computer wins") {
        displayOutcome.textContent = (`${computerSelection} beats ${playerSelection}, you lose!`);
    };
    if (result === "draw") {
        return 'oops';
    };
}