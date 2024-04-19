// Create a function to get random choice from the computer
const getComputerChoice = () => {
    // Create an array to hold 'rock', 'paper', 'scissors'
    const getRandomChoice = ['rock', 'paper', 'scissors'];
    // Return random value from the array 
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
}
// Test: Check if output is correct and giving random values : DONE!

// Create a function to play a round with parameters: playerSelection and computerSelection

// Prompt user to choose between 'rock', 'paper', 'scissors'

// Create conditional statement to determine if round is a win, defeat or draw

// Test: Check if can play a round and must print a message if win, defeat or draw :