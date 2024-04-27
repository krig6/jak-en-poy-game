const getComputerChoice = () => {
    const getRandomChoice = [
        { choice: 'rock', src: './images/rock.png' }, { choice: 'paper', src: './images/paper.png' }, { choice: 'scissors', src: './images/scissors.png' }
    ];
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
};


const showPlayerChoice = document.querySelector(".player-choice");
const showComputerChoice = document.querySelector(".computer-choice");
const buttons = document.querySelector(".game-buttons");
const disableButtons = document.querySelectorAll(".game-buttons button");
const message = document.querySelector(".message");
const showPlayerScore = document.querySelector(".player-score");
const showComputerScore = document.querySelector(".computer-score");


function endGame() {
    if (playerScore !== 5 && computerScore !== 5) return;

    disableButtons.forEach((button) => {

        button.disabled = true;
    });
}

function clearChoices() {
    showPlayerChoice.innerHTML = "";
    showComputerChoice.innerHTML = "";
}
function getComputerImage() {
    let computerChoiceImage = createImage(showComputerChoice.getAttribute('data-img'), "Computer's Choice", 256, 256);
    showComputerChoice.appendChild(computerChoiceImage);
}

// function to create an image element
function createImage(src, alt, height, width) {
    let img = new Image();
    img.src = src;
    img.alt = alt;
    img.height = height;
    img.width = width;
    return img;
}

buttons.addEventListener('click', (event) => {
    let target = event.target;
    let computer = getComputerChoice()
    switch (target.id) {
        case 'rock':
        case 'paper':
        case 'scissors':
            clearChoices();
            let playerChoiceImage = createImage(`./images/${target.id}.png`, target.id, 256, 256);
            showPlayerChoice.appendChild(playerChoiceImage);
            showComputerChoice.setAttribute('data-img', computer.src);
            getComputerImage();
            playRound(target.id, computer.choice);
            showPlayerScore.textContent = playerScore;
            showComputerScore.textContent = computerScore;
            break;

    }
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        message.textContent = (`It's a draw! Both unsheathed "${playerSelection}" weapons!`);
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        message.textContent = (
            `You win! Mighty ${playerSelection} trumps ${computerSelection}!`
        );
        playerScore++;


    } else if (
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        message.textContent = (
            `You lose! Better than ${playerSelection}? ${computerSelection}!`
        );
        computerScore++;
    }
    endGame();
}


