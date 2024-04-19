// Create a function to get random choice from the computer
const getComputerChoice = () => {
    // Create an array to hold 'rock', 'paper', 'scissors'
    const getRandomChoice = ['rock', 'paper', 'scissors'];
    // Return random value from the array 
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
}
// Test: Check if output is correct and giving random values : DONE!

let computerSelection = getComputerChoice(); // So we can pass the random value to playRound();
// Prompt user to choose between 'rock', 'paper', 'scissors'
let playerSelection = prompt("rock, paper, scissors");
// Create a function to play a round with parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    // Create conditional statement to determine if round is a win, defeat or draw
    if (playerSelection === computerSelection) {
        console.log(`Draw!`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`Win!`);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`Lose`);
    }
}

playRound(playerSelection, computerSelection) // Test: Check if can play a round and must print a message if win, defeat or draw : DONE!

