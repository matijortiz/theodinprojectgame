
// Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let computerChoose = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return ('computer has choose: ') + (computerChoose[Math.floor(Math.random() * 3)]);
}

//I'm adding this for test, to view the computer's choose on my console
console.log(getComputerChoice());