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
let input = prompt('Take your pick between Rock, Paper, Scissors.')
function getHumanChoice() {
  if (input.toLowerCase() === 'rock') {
    return 'Rock'
  } else if (input.toLowerCase() === 'paper') {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}
console.log(getHumanChoice())
