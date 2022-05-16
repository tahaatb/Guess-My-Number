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
  }

  if (guess === rand) {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('body').style.backgroundColor = '#48b555';
    if (score >= highscore) {
      highscore = score;
    }
  } else {
    score = score - 1;
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
});
