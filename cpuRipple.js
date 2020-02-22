let randomColors = ['green', 'red', 'yellow', 'blue'];
console.log(randomColors)
function getRandomColor(){
  return randomColors[Math.floor(Math.random()*randomColors.length)];

}

let currentSequence = []
function computerMove(){
  let color = getRandomColor()
  currentSequence.push(color);
  console.log('This is the selected random color ' + color)
  return currentSequence
}
console.log(computerMove())

/*function cpuMove(addRipple){
  let ripple = cpuRipple.getElementById('cpu')
  for (let element of currentSequence){
    if(element === 'green'){
      ripple.cpu = addRipple
    }
  }
}*/
console.log('This is the current sequence: ' + currentSequence)
function clickTheButton() {
  for(let element of currentSequence){
    $(`.simon-button.${element}`).click();
    
  }
}

//clickTheButton('red');
//clickTheButton('green');
