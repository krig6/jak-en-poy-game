// Constant for match messages
const winResponses = ["Nice!", "Keep it up.", "Great!", "Well played!"];
const drawResponses = ["Draw!", "Oops! Samesies.", "Meh! A tie.", "Neither wins!"];
const lossResponses = ["Unlucky!", "Denied!", "Close, but no!", "Last chance!"];

// DOM element selectors
const showPlayerChoice = document.querySelector(".player-choice");
const showComputerChoice = document.querySelector(".computer-choice");
const buttons = document.querySelector(".game-buttons");
const disableButtons = document.querySelectorAll(".game-buttons button");
const showMessage = document.querySelector(".message");
const showPlayerScore = document.querySelector(".player-score");
const showComputerScore = document.querySelector(".computer-score");
const versus = document.querySelector(".versus");
const newGameButton = document.querySelector("#new-game");

// Initialize game scores
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// Event listener to handle game button clicks
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

// Function to create an image element
function createImage(src, alt, height, width) {
    let img = new Image();
    img.src = src;
    img.alt = alt;
    img.height = height;
    img.width = width;
    return img;
}

// Function to get a random computer choice
const getComputerChoice = () => {
    const getRandomChoice = [
        { choice: 'rock', src: './images/rock.png' }, { choice: 'paper', src: './images/paper.png' }, { choice: 'scissors', src: './images/scissors.png' }
    ];
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
};


// Function to display the computer's choice image
function getComputerImage() {
    let computerChoiceImage = createImage(showComputerChoice.getAttribute('data-img'), "Computer's Choice", 256, 256);
    showComputerChoice.appendChild(computerChoiceImage);
}

// Function to clear player and computer choices
function clearChoices() {
    showPlayerChoice.innerHTML = "";
    showComputerChoice.innerHTML = "";
}

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        showMessage.textContent = drawResponses[Math.floor(Math.random() * 3)];
        versus.textContent = "VS";
        draw++;
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        showMessage.textContent = winResponses[playerScore];
        versus.textContent = "VS";
        playerScore++;


    } else if (
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        showMessage.textContent = lossResponses[computerScore];
        versus.textContent = "VS";
        computerScore++;
    }
    endGame();
}

// Function to handle a new game
function newGame() {
    playerScore = 0;
    computerScore = 0;
    showPlayerScore.textContent = 0;
    showComputerScore.textContent = 0;
    showMessage.textContent = ("Try your luck?");
    versus.textContent = ("Choose your weapon to play!");
    clearChoices();
    disableButtons.forEach((button) => {
        button.disabled = false;
    });
}

// Event listener for new game button
newGameButton.addEventListener('click', newGame);

// Function to end the game after 5 rounds and show if you win or lose
function endGame() {
    if (playerScore !== 5 && computerScore !== 5) return;

    else if (playerScore === 5) {
        disableButtons.forEach((button) => {
            showMessage.textContent = ("Bask in Victory!");
            button.disabled = true;
        });

    } else if (computerScore === 5) {
        disableButtons.forEach((button) => {
            showMessage.textContent = ("Suffer in defeat!");
            button.disabled = true;
        });
    }
}














