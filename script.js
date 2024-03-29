'use strict';

let score = 20;
let highscore = 0;
let rand = Math.floor(Math.random() * 20) + 1;
console.log(rand);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'No number has been entered.';
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'The number is not between 1 and 20.';
  } else if (guess === rand) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#48b555';
    if (score >= highscore) {
      highscore = score;
    }
    document.querySelector('.number').textContent = `${rand}`;
  } else if (guess > rand) {
    document.querySelector('.message').textContent = 'Too high!';
    score = score - 1;
    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('body').style.backgroundColor = '#a81414';
    }
    document.querySelector('.score').textContent = `${score}`;
  } else if (guess < rand) {
    document.querySelector('.message').textContent = 'Too low!';
    score = score - 1;
    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('body').style.backgroundColor = '#a81414';
    }
    document.querySelector('.score').textContent = `${score}`;
  } else {
    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('body').style.backgroundColor = '#a81414';
    }
    document.querySelector('.score').textContent = `${score}`;
  }

  document.querySelector('.highscore').textContent = `${highscore}`;
});

document.querySelector('.again').addEventListener('click', function () {
  rand = Math.floor(Math.random() * 20) + 1;
  console.log(rand);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = `?`;
});
