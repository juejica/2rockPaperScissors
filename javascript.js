// Logic to get the computer choice (without using an array)
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

// Logic to get the human choice
function getHumanChoice() {
  let input = prompt(
    'Take your pick between Rock, Paper, or Scissors.'
  ).toLowerCase()
  if (input === 'rock' || input === 'paper' || input === 'scissors') {
    return input
  } else {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors.'
  }
}

// Function to play 5 rounds
function playGame() {
  let humanScore = 0
  let computerScore = 0

  // Function to play 1 round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    let capitaliseHumanChoice =
      humanChoice[0].toUpperCase() + humanChoice.substring(1)
    let capitaliseComputerChoice =
      computerChoice[0].toUpperCase() + computerChoice.substring(1)

    if (humanChoice === computerChoice) {
      console.log("It's a tie!")
      console.log(`Your score: ${humanScore}`)
      console.log(`Computer's score: ${computerScore}`)
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(
        `You win! ${capitaliseHumanChoice} beats ${capitaliseComputerChoice}.`
      )
      console.log(`Your score: ${++humanScore}`)
      console.log(`Computer's score: ${computerScore}`)
    } else {
      console.log(
        `You lose! ${capitaliseHumanChoice} loses to ${capitaliseComputerChoice}.`
      )
      console.log(`Your score: ${humanScore}`)
      console.log(`Computer's score: ${++computerScore}`)
    }
  }

  // Loops playRound() function 5 times
  for (let round = 1; round <= 5; round++) {
    console.log('-------------------------------------------------')
    console.log(`Round ${round}`)
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
  }

  // Displays outcome
  console.log()
  if (humanScore > computerScore) {
    console.log('*************************************************')
    console.log('Congratulations! You won the game!')
  } else if (humanScore < computerScore) {
    console.log('*************************************************')
    console.log('Womp womp. The computer won the game.')
  } else {
    console.log('*************************************************')
    console.log("It's a tie. Try again!")
  }
}

// Start the game
playGame()
