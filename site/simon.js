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

// let currentChallenge = newChallenge();
let currentChallenge = ['red', 'blue', 'yellow', 'red', 'green'];
let currentStep = 4;

let move = 'green';

if (moveIsCorrect(currentChallenge, currentStep, move)) {
  currentStep += 1;

  if (roundIsDone(currentChallenge, currentStep)) {
    let randomColor = getRandomColor();
    currentStep = 0;

    currentChallenge.push(randomColor);
  }
} else {
  // game over;
}
