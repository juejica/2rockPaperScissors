//computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)

  if (choice === 0) {
    return 'Rock'
  } else if (choice === 1) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}

//human choice
let input = prompt('Take your pick between Rock, Paper, or Scissors.')
function getHumanChoice() {
  let answer = input.toLowerCase()

  if (answer === 'rock') {
    return 'Rock'
  } else if (answer === 'paper') {
    return 'Paper'
  } else if (answer === 'scissors') {
    return 'Scissors'
  } else {
    return 'Invalid choice. Please choose Rock, Paper, or Scissors.'
  }
}
console.log(getHumanChoice())
