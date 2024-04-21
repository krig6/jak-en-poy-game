const getComputerChoice = () => {
    const getRandomChoice = ["rock", "paper", "scissors"];
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
};

function ask(question, yes, no) {
    if (confirm(question)) yes();
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
        console.log(`It's a draw! Both unsheathed "${playerSelection}" weapons!`);
        let outcome = "draw";
        return outcome;
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        console.log(
            `You win! Mighty ${playerSelection} trumps ${computerSelection}!`
        );
        let outcome = "win";
        return outcome;
    } else if (
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        console.log(
            `You lose! Better than ${playerSelection}? ${computerSelection}!`
        );
        let outcome = "lose";
        return outcome;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Rock, paper, scissors. Shoot!");
        if (playerSelection !== null) {
            playerSelection.toLowerCase();
        } else {
            alert("You cancelled the game. Just hit F5 so I can ask you again!");
            console.log("Game cancelled. No match winner!");
            return;
        }
        while (
            !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())
        ) {
            alert("Please choose between rock, paper or scissors!");
            playerSelection = prompt("Rock, paper, scissors. Shoot!");
            if (playerSelection !== null) {
                playerSelection.toLowerCase();
            } else {
                alert("You cancelled the game. Just hit F5 so I can ask you again!");
                console.log("Game cancelled. No match winner!");
                return;
            }
        }
        let computerSelection = getComputerChoice();
        console.log(`Round # ${i} Recap`);
        console.log(`Player threw in ${playerSelection.toLowerCase()}!`);
        console.log(`Computer threw in ${computerSelection}!`);
        let result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        }
        console.log(
            `Player has ${playerScore} point${playerScore === 0 ? "" : playerScore === 1 ? "" : "s"}.`
        );
        console.log(
            `Computer has ${computerScore} point${computerScore === 0 ? "" : computerScore === 1 ? "" : "s"}.`
        );
    }
    if (playerScore > computerScore) {
        alert(
            `You won with ${playerScore} point${playerScore === 0 ? "" : playerScore === 1 ? "" : "s"}. Try buying a lottery ticket next time!`
        );
    } else if (computerScore > playerScore) {
        alert(
            `You lost and computer won with ${computerScore} point${computerScore === 0 ? "" : computerScore === 1 ? "" : "s"}!`
        );
    } else if ((playerScore = computerScore)) {
        alert(`Meh! A tie!`);
    }
}
