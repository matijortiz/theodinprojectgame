
// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let computerChoose = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    return ('computer has choose: ') + (computerChoose[Math.floor(Math.random() * 3)]);
}

// I'm adding this for test, to view the computer's choose on my console //
console.log(getComputerChoice());

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