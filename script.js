let gameAge = 21

//  The prompt is like a alert/input where the variable is inputted. The do and while allows for a code to run on repeat until the userGuess does equal to gameAge.

do {
  userGuess = prompt('Please enter valid age from 1-40.')
  if (gameAge < userGuess) {
    alert('Too high. Press OK to continue.')
  } else if (gameAge > userGuess) {
    alert('Too low. Press OK to continue.')
  } else {
    document.getElementById('textbox').innerHTML = 'You did it! The game age is 21!'
    alert('You guessed correct!')
  }
} while (userGuess != gameAge)
