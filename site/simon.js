/*

Nouns:
  - Color
  - Button
  - Board / the machine
  - Game
  - Move
  - Round

Verbs:
  - Press
  -
*/

// let currentSequence = newChallenge();
let randomColors = ['green', 'red', 'yellow', 'blue'];

//let currentSequence = ['green', 'green', 'green', 'green', 'green'];
// let currentStep = 4;

// let move = 'green';

// function startGame(){

// }


let currentSequence = []
function getRandomColor(){
  return randomColors[Math.floor(Math.random()*randomColors.length)];
}

function computerMove(){
  currentSequence.push(getRandomColor());

}
function raiseOpacity(element){
  $(`.simon-button.${element}`).animate({
    opacity: 100
  });
}

function lowerOpacity(element){
  $(`.simon-button.${element}`).animate({
    opacity: .25
  });
}

function manipulateBrowser(currentSequence){
  console.log(currentSequence.length)  
  if(currentSequence.length === 0){
      return;
    }
    let nextColor = currentSequence.shift();
    //lowerOpacity(nextColor);
    $(`.simon-button.${nextColor}`).animate({
      opacity: 0
    }),1000,
    $(`.simon-button.${nextColor}`).animate({
      opacity: 100
    });
    setTimeout(() => {
      manipulateBrowser(currentSequence);},
      1000);
  }

function playerMove(){

  //start clicking pattern
}


function moveIsCorrect(currentSequence, currentStep, move){
  if( /*playerSequence[currentStep]*/ === currentSequence[currentStep])
}

function roundIsDone(){

}

function play(){
  if (moveIsCorrect(currentSequence, currentStep, move)) {
   currentStep += 1;

   if(!moveIsCorrect(currentSequence, currentStep, move)) {
     //game over
   }

   if (roundIsDone(currentSequence, currentStep)) {
     currentStep = 0;
     computerMove();
     manipulateBrowswer(currentSequence);
     playerMove();
     play();
   }
  } else { 
    playerMove(); }
   
 }
}
 
//computerMove();
console.log(currentSequence)
manipulateBrowser(currentSequence);

