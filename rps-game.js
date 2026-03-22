let gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

refreshScoreDisplay();

let isAutoRunning = false;
let timerId;

function toggleAutoMode() {
  if (!isAutoRunning) {
    timerId = setInterval(() => {
      const userMoveSelection = getComputerChoice();
      processPlay(userMoveSelection);
    }, 1000);
    isAutoRunning = true;

  } else {
    clearInterval(timerId);
    isAutoRunning = false;
  }
}

document.querySelector('.js-rock-btn')
  .addEventListener('click', () => {
    processPlay('rock');
  });

document.querySelector('.js-paper-btn')
  .addEventListener('click', () => {
    processPlay('paper');
  });

document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => {
    processPlay('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    processPlay('rock');
  } else if (event.key === 'p') {
    processPlay('paper');
  } else if (event.key === 's') {
    processPlay('scissors');
  }
});

function processPlay(userMove) {
  const botMove = getComputerChoice();

  let roundResult = '';

  if (userMove === 'scissors') {
    if (botMove === 'rock') {
      roundResult = 'You lose.';
    } else if (botMove === 'paper') {
      roundResult = 'You win.';
    } else if (botMove === 'scissors') {
      roundResult = 'Tie.';
    }

  } else if (userMove === 'paper') {
    if (botMove === 'rock') {
      roundResult = 'You win.';
    } else if (botMove === 'paper') {
      roundResult = 'Tie.';
    } else if (botMove === 'scissors') {
      roundResult = 'You lose.';
    }
    
  } else if (userMove === 'rock') {
    if (botMove === 'rock') {
      roundResult = 'Tie.';
    } else if (botMove === 'paper') {
      roundResult = 'You lose.';
    } else if (botMove === 'scissors') {
      roundResult = 'You win.';
    }
  }

  if (roundResult === 'You win.') {
    gameStats.wins += 1;
  } else if (roundResult === 'You lose.') {
    gameStats.losses += 1;
  } else if (roundResult === 'Tie.') {
    gameStats.ties += 1;
  }

  localStorage.setItem('gameStats', JSON.stringify(gameStats));

  refreshScoreDisplay();

  document.querySelector('.js-round-result').innerHTML = roundResult;

  document.querySelector('.js-battle-moves').innerHTML = `You
<img src="images/${userMove}-emoji.png" class="choice-image">
<img src="images/${botMove}-emoji.png" class="choice-image">
Computer`;
}

function refreshScoreDisplay() {
  document.querySelector('.js-stats-board')
    .innerHTML = `Wins: ${gameStats.wins}, Losses: ${gameStats.losses}, Ties: ${gameStats.ties}`;
}

function getComputerChoice() {
  const randomValue = Math.random();

  let botChoice = '';

  if (randomValue >= 0 && randomValue < 1 / 3) {
    botChoice = 'rock';
  } else if (randomValue >= 1 / 3 && randomValue < 2 / 3) {
    botChoice = 'paper';
  } else if (randomValue >= 2 / 3 && randomValue < 1) {
    botChoice = 'scissors';
  }

  return botChoice;
}