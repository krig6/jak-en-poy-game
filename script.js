const getComputerChoice = () => {
    const getRandomChoice = [
        { choice: 'rock', src: './images/rock.png' }, { choice: 'paper', src: './images/paper.png' }, { choice: 'scissors', src: './images/scissors.png' }
    ];
    return getRandomChoice[Math.floor(Math.random() * getRandomChoice.length)];
};

const showPlayerChoice = document.querySelector(".player-choice");
const showComputerChoice = document.querySelector(".computer-choice");
const buttons = document.querySelector(".game-buttons");


function clearChoices() {
    showPlayerChoice.innerHTML = "";
    showComputerChoice.innerHTML = "";
}
function getComputerImage() {
    let computerChoiceImage = createImage(showComputerChoice.getAttribute('data-img'), "Computer's Choice", 200, 300);
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
            let playerChoiceImage = createImage(`./images/${target.id}.png`, target.id, 200, 300);
            showPlayerChoice.appendChild(playerChoiceImage);
            showComputerChoice.setAttribute('data-img', computer.src);
            getComputerImage();
            playRound(target.id, computer.choice);
            break;

    }
});


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

