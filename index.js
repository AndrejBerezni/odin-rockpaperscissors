let choices = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors'
}

let getComputerChoice = () => choices[Math.floor(Math.random() * 3) + 1]

let playRound = (playerSelection, computerSelection) => {
    let input = playerSelection.toLowerCase()
    if (input == 'rock') {
        if (computerSelection == 'Rock') {
            return [`It's a tie!`, 0]
        } else if (computerSelection == 'Paper') {
            return [`You lose! Paper beats rock!`, -1]
        } else {
            return [`You win! Rock beats scissors!`, 1]
        }
    } else if (input == 'paper') {
        if (computerSelection == 'Rock') {
            return [`You win! Paper beats rock!`, 1]
        } else if (computerSelection == 'Paper') {
            return [`It's a tie!`, 0]
        } else {
            return [`You lose! Scissors beat paper!`, -1]
        }
    } else {
        if (computerSelection == 'Rock') {
            return [`You lose! Rock beats scissors!`, -1]
        } else if (computerSelection == 'Paper') {
            return [`You win! Scissors beat paper!`, 1]
        } else {
            return [`It's a tie!`, 0]
        }
    }
}

let game = () => {
    let userScore = 0;
    let compScore = 0;
    while (userScore < 3 && compScore < 3) {
        let playerSelection = prompt('Rock, paper or scissors?')
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        if (result[1] > 0) {
            userScore++
        } else if (result[1] < 0) {
            compScore++
        }
        console.log(result[0])
        console.log(`Player: ${userScore} | Computer: ${compScore}`)
    }
    if (userScore > compScore) {
        console.log('You win the match!')
    } else {
        console.log('Computer wins the match!')
    }
}