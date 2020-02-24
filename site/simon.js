let randomColors = ['green', 'red', 'yellow', 'blue'];
let currentSequence = [];
let playerSequence = [];
let currentStep = 0;

// let currentSequence = ['green', 'green', 'green', 'green', 'green'];
// let currentStep = 4;

// let move = 'green';

// function startGame(){

// }

function getRandomColor() {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
}

function computerMove() {
  currentSequence.push(getRandomColor());
}

function manipulateBrowser(startIndex, onFinish) {
  console.log(currentSequence);
  if (currentSequence.length === startIndex -) {
    onFinish();
    return;
  }

  console.log('currentSequence length is: ' + currentSequence.length);

  let nextColor = currentSequence[startIndex];

  $(`div.simon-button.${nextColor}`).animate(
    {
      opacity: 0,
    },
    {
      duration: 300,
      complete: function() {
        $(this).animate({
          opacity: 100,
        }, 300);
      },
    },
  );

  setTimeout(() => {
    manipulateBrowser(startIndex + 1, onFinish);
  }, 800);
}

function startRound() {
  disablePlayerInput();
  computerMove();
  manipulateBrowser(0, function() {
    enablePlayerInput();
  });
}

function endGame() {
  disablePlayerInput();
  alert('You done fucked up.');
}

function moveIsCorrect() {
  return playerSequence[currentStep - 1] === currentSequence[currentStep - 1];
}

function roundIsDone() {
  return currentSequence[currentSequence.length - 1] === playerSequence[playerSequence.length - 1];
}

// let clickHandlers = {
//   '.simon-button.green': [function() {
//     playerSequence.push('green');
//     console.log(`playerSequence is now ${playerSequence}`);
//   }],
// };

function enablePlayerInput() {
  $('.simon-button.green').on('click', function() {
    playerSequence.push('green');
    play(playerSequence);
    console.log(`playerSequence is now ${playerSequence}`);
  });
  $('.simon-button.red').on('click', function() {
    playerSequence.push('red');
    play(playerSequence);
    console.log(`playerSequence is now ${playerSequence}`);
  });
  $('.simon-button.yellow').on('click', function() {
    playerSequence.push('yellow');
    play(playerSequence);
    console.log(`playerSequence is now ${playerSequence}`);
  });

  $('.simon-button.blue').on('click', function() {
    playerSequence.push('blue');
    play(playerSequence);
    console.log(`playerSequence is now ${playerSequence}`);
  });
}

function disablePlayerInput() {
  $('.simon-button').unbind('click');
}

function play(playerSequence) {
  console.log(moveIsCorrect());
  console.log(currentStep);

  if (moveIsCorrect() === true) {
    currentStep += 1;
  }

  if (!moveIsCorrect()) {
    console.log('Move is not correct');
    endGame();
  }

  if (roundIsDone()) {
    currentStep = 0;
    playerSequence = [];
    startRound();
  }
}

startRound();
