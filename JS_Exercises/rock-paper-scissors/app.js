const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let result;
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = `It's a draw!`;
    }
    else if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!';
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!';
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!';
    }
    else if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You lose!';
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!';
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!';
    }

    resultDisplay.innerHTML = result;
}