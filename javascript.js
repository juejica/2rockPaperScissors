//Logic to get the computer choice (without using an array)
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)

  if (choice === 0) {
    return 'rock'
  } else if (choice === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

//Logic to get the human choice
let input = prompt(
  'Take your pick between Rock, Paper, or Scissors.'
).toLowerCase()
function getHumanChoice() {
  if (input === 'rock') {
    return 'Rock'
  } else if (input === 'paper') {
    return 'Paper'
  } else if (input === 'scissors') {
    return 'Scissors'
  } else {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors.'
  }
}

//Logic to play a single round
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  computerChoice = computerChoice.toLowerCase()

  let capitaliseHumanChoice =
    humanChoice[0].toUpperCase() + humanChoice.substring(1)
  let capitaliseComputerChoice =
    computerChoice[0].toUpperCase() + computerChoice.substring(1)

  if (humanChoice === computerChoice) {
    return "It's a tie!"
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You win! ${capitaliseHumanChoice} beats ${capitaliseComputerChoice}.`
  } else {
    return `You lose! ${capitaliseHumanChoice} loses to ${capitaliseComputerChoice}.`
  }
}

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
let result = playRound(humanChoice, computerChoice)

console.log(result)
