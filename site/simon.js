let randomColors = ['green', 'red', 'yellow', 'blue'];
let currentSequence = [];
let playerSequence = [];
let currentStep = 0;

//let currentSequence = ['green', 'green', 'green', 'green', 'green'];
// let currentStep = 4;

// let move = 'green';

// function startGame(){

// }

function getRandomColor(){
  return randomColors[Math.floor(Math.random()*randomColors.length)];
}

function computerMove(){
  currentSequence.push(getRandomColor());
}

function manipulateBrowser(){
  console.log(currentSequence.length)
  if(currentSequence.length === 0){
      return;
  }
  let nextColor = currentSequence.shift();
  $(`div.simon-button.${nextColor}`).animate({
  opacity: 0
  }),1000,
  $(`div.simon-button.${nextColor}`).animate({
    opacity: 100
  });
  setTimeout(() => {
    manipulateBrowser();},
    1000);
}

function startGame(){
  computerMove();
  manipulateBrowser();
  play(playerSequence);
}

function endGame(){
  alert(`You done fucked up.`);
}


function moveIsCorrect(){
  if( playerSequence[currentStep] === currentSequence[currentStep]){
    return true;
  } else {
    return false;
  }
}

function roundIsDone(){
  if(currentSequence[currentSequence.length-1] === playerSequence[playerSequence.length -1]){
    return true;
  }
  return false;
}

function playerInput(){
  $('.simon-button.green').on('click', function() {
    playerSequence.push('green');
    console.log(`playerSequence is now ${playerSequence}`);
  });
  $('.simon-button.red').on('click', function() {
    playerSequence.push('red');
    console.log(`playerSequence is now ${playerSequence}`);
  });
  $('.simon-button.yellow').on('click', function() {
    playerSequence.push('yellow');
    console.log(`playerSequence is now ${playerSequence}`);
  });
  $('.simon-button.blue').on('click', function() {
    playerSequence.push('blue');
    console.log(`playerSequence is now ${playerSequence}`);
  });
}


function play(playerSequence){
  if(moveIsCorrect()) {
   currentStep += 1;
   console.log(moveIsCorrect());
   console.log(currentStep);
  }

   if(!moveIsCorrect()) {
     endGame();
   }

   if (roundIsDone()){
     currentStep = 0;
     //computerMove();
     //manipulateBrowser();
     playerInput();
     //play(playerSequence);
   } else {
    //playerInput();
  }
}

console.log(currentSequence)
startGame();
