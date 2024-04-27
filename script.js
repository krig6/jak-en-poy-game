const getComputerChoice = () => {
    const getRandomChoice = [
        { choice: 'rock', src: './images/rock.png' }, { choice: 'paper', src: './images/paper.png' }, { choice: 'scissors', src: './images/scissors.png' }
    ];
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
};

// function to create an image element
function createImage(src, alt, height, width) {
    let img = new Image();
    img.src = src;
    img.alt = alt;
    img.height = height;
    img.width = width;
    return img;
}



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

