// Create a function to get random choice from the computer


const getComputerChoice = () => {
    // Create an array to hold 'rock', 'paper', 'scissors'
    const getRandomChoice = ['rock', 'paper', 'scissors'];
    // Return random value from the array 
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
}
// Test: Check if output is correct and giving random values : DONE!


// Create a function to play a round with parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    // Create conditional statement to determine if round is a win, defeat or draw
    if (playerSelection === computerSelection) {
        console.log(`Draw!`);
        let outcome = 'draw';
        return outcome;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`Win!`);
        let outcome = 'win';
        return outcome;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`Lose!`);
        let outcome = 'lose'
        return outcome;
    }
}
// playRound(playerSelection, computerSelection) // Test: Check if can play a round and must print a message if win, defeat or draw : DONE!

// Create a function called playGame() to play the game for 5 round
function playGame() {
    // Create a loop and iterate 5 times = 5 rounds
    for (let i = 1; i <= 5; i++) {
        let player = 0;
        let computer = 0;
        // Prompt user to choose between 'rock', 'paper', 'scissors'
        let playerSelection = prompt("Rock, paper, scissors. Shoot!"); // declared inside this function so we can loop the prompt 5 times
        let computerSelection = getComputerChoice(); // So we can loop computer's move 5 times
        // Show round # using current iteration count as values
        console.log(`Round # ${i} Recap`);
        // Print choice of player
        console.log(`Player threw in ${playerSelection}!`);
        // Print choice of computer
        console.log(`Computer threw in ${computerSelection}!`);
        // Print if win or defeat or draw
        let result = playRound(playerSelection, computerSelection);

        if (result === 'win') {
            player++;
        } else if (result === 'lose') {
            computer++;
        }
    }
}

