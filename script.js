const getComputerChoice = () => {
    const getRandomChoice = ['rock', 'paper', 'scissors'];
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
}

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
function game() {
    playGame();
}
function exit() {
    alert("Okay. Just hit F5 so I can ask you again.");
}
ask("Try your luck?", game, exit);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw!");
        let outcome = 'draw';
        return outcome;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Win!");
        let outcome = 'win';
        return outcome;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("Lose!");
        let outcome = 'lose'
        return outcome;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Rock, paper, scissors. Shoot!");
        let computerSelection = getComputerChoice();
        console.log(`Round # ${i} Recap`);
        console.log(`Player threw in ${playerSelection}!`);
        console.log(`Computer threw in ${computerSelection}!`);
        let result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            playerScore++;
        } else if (result === 'lose') {
            computerScore++;
        }
        console.log(`Player has ${playerScore} points.`);
        console.log(`Computer has ${computerScore} points.`);
    }
    if (playerScore > computerScore) {
        alert('WON THE GAME!');
    } else if (computerScore > playerScore) {
        alert('LOST THE GAME!');
    } else if (playerScore = computerScore) {
        alert('DRAW!');
    }
}