// computer choice
function getComputerChoice() {
  let choice = Math.random() * 3
  if (choice <= 1) {
    return 'rock'
  } else if (choice > 1 && choice <= 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}
