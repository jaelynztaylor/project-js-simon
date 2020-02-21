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

let currentSequence = ['green', 'green', 'green', 'green', 'green'];
let currentStep = 4;

let move = 'green';

function startGame(){

}

function getRandomColor(){
  return randomColors[Math.floor(Math.random()*randomColors.length)];
}

function computerMove(){
  currentSequence.push(getRandomColor());

}

function playerMove(){
  //start clicking pattern
}

function output(currentSequence){
  for(let element of currentSequence){
    if(element === "green"){
      $('.simon-button.green.cpu').css({
        'background-color': 'rgb(0, 184, 0)',
        'transform': 'scale(1.1)'
      });
      $('.simon-button.green:after').css({
        'content': "",
        'background': '#90EE90',
        'display': block,
        'position': absolute,
        'padding-top': '300%',
        'padding-left': '350%',
        'margin-left': '-20px!important',
        'margin-top': '-120%',
        'opacity': '0',
        'transition': 'all 0.8s'
      });
      $('.simon-button.green:active:after').css({
        'padding': '0',
        'margin': '0',
        'opacity': '1',
        'transition': '0s'
      });
    }
  }}



function moveIsCorrect(){

}

function roundIsDone(){

}

function play(){
  if (moveIsCorrect(currentSequence, currentStep, move)) {
   currentStep += 1;

   if (roundIsDone(currentSequence, currentStep)) {
     let randomColor = getRandomColor();
     currentStep = 0;

     currentSequence.push(randomColor);
   }
  } else {
   // game over;
 }
}

output();
