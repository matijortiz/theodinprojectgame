
// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

const options = ['rock', 'paper', 'scissors']; // I wanna use this variable name later in the userChoice function. I've learned this cannot use outside of the global scope, so I need it inside the userChoice function.
function getComputerChoice() {
    return (options[Math.floor(Math.random() * 3)]);
}

// Create a function which checks one winner //

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

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters the playerSelection and computerSelection - and then return a string that declares the winner (previous function)//

function PlayRound(playerSelection, computerSelection) {
    let result = myWinner(playerSelection, computerSelection);
    if (result == "It's a Tie") {
        return "It's a Tie!";
    } else if ( 
        (result == 'Player')
    ) {
        return `Player is the Master of Universe!! ${playerSelection} BEATS ${computerSelection}`
    } else {
        return `Computer has Cleaned the Floor with your face!! ${computerSelection} BEATS ${playerSelection}`
    }
}

//Create a function userChoice and get inputs from the user.

function getUserChoice() {
    let input = prompt('Choose: rock, paper or scissors');
    input = input.toLowerCase();
    console.log(input)
}



const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(PlayRound(playerSelection, computerSelection));


/* Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end. */


