const rockBtn = document.querySelector ('.rock');
const paperBtn = document.querySelector ('.paper');
const scissorsBtn = document.querySelector ('.scissors');

rockBtn.addEventListener ('click', () => (
    playerSelection = 'Rock',
    computerSelection = getComputerChoice(),
    console.log(playRound(playerSelection, computerSelection)),
    console.log(playerSelection),
    console.log(computerSelection)
    )
);

paperBtn.addEventListener ('click', () => (
    playerSelection = 'Paper',
    computerSelection = getComputerChoice(),
    console.log(playRound(playerSelection, computerSelection)),
    console.log(playerSelection),
    console.log(computerSelection)
    )
);

scissorsBtn.addEventListener ('click', () => (
    playerSelection = 'Scissors',
    computerSelection = getComputerChoice(),
    console.log(playRound(playerSelection, computerSelection)),
    console.log(playerSelection),
    console.log(computerSelection)
    )
);

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
}