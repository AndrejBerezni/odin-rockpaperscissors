let userScore = 0;
let compScore = 0;

let choices = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors'
}
let getComputerChoice = () => choices[Math.floor(Math.random() * 3) + 1]

let displayPlayerScore = document.getElementById('player-score');
let displayComputerScore = document.getElementById('computer-score');
let computerChoice = document.getElementById('computer-choice');
let winner = document.getElementById('winner');

let updateScore = () => {
    displayComputerScore.innerText = compScore;
    displayPlayerScore.innerText = userScore;
    if (userScore == 5) {
        winner.innerText = 'YOU WIN!';
    } else if (compScore == 5) {
        winner.innerText = 'COMPUTER WINS!';
    }
}

let selections = document.querySelectorAll('.selection');

selections.forEach(selection => {
    selection.addEventListener('click', () => {
        if (userScore < 5 && compScore < 5) {
            let playerSelection = selection.getAttribute('id');
            let computerSelection = getComputerChoice();
            computerChoice.innerText = `Computer choice: ${computerSelection}`
            if (playerSelection == 'rock') {
                if (computerSelection == 'Rock') {
                    return `It's a tie!`
                } else if (computerSelection == 'Paper') {
                    compScore++
                    updateScore()
                    return `You lose! Paper beats rock!`
                } else {
                    userScore++
                    updateScore()
                    return `You win! Rock beats scissors!`
                }
            } else if (playerSelection == 'paper') {
                if (computerSelection == 'Rock') {
                    userScore++
                    updateScore()
                    return `You win! Paper beats rock!`
                } else if (computerSelection == 'Paper') {
                    return `It's a tie!`
                } else {
                    compScore++
                    updateScore()
                    return `You lose! Scissors beat paper!`
                }
            } else {
                if (computerSelection == 'Rock') {
                    compScore++
                    updateScore()
                    return `You lose! Rock beats scissors!`
                } else if (computerSelection == 'Paper') {
                    userScore++
                    updateScore()
                    return `You win! Scissors beat paper!`
                } else {
                    return `It's a tie!`
                }
            }
        }
    })
});

let newGame = document.getElementById('new-game');

newGame.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    winner.innerText = ''
    updateScore();
});