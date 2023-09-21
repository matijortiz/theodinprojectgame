
// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let computerChoose = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return (computerChoose[Math.floor(Math.random() * 3)]);
}

// Create a function which checks winner //

function myWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie";
    } else if (
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'rock' && computerSelection == 'scissors')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters the playerSelection and computerSelection - and then return a string that declares the winner//

function PlayRound(playerSelection, computerSelection) {
    let result = myWinner(playerSelection, computerSelection);
    if (result == "It's a Tie") {
        return "It's a Tie!";
    } else if ( 
        (result == 'Player')
    ) {
        return `Player is the master of universe!! ${playerSelection} beats ${computerSelection}`
    } else {
        return `Computer has cleaned the floor with your face!! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(PlayRound(playerSelection, computerSelection));

//