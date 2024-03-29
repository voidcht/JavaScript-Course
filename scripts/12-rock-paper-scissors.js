let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// //to add the score on the page using DOM
// document.querySelector('.js-score')
//   .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

//call to update the score - instead of above code 
updateScoreElement();

let isAutoPlaying = false;
let intervalID;

function autoPlay(){

  //if not playing, let's start the autoplay
  if(!isAutoPlaying){

    //to play the game every second 
    //get the id value returned by the function
    // intervalID = setInterval(function() {
      //using an arrow function
      intervalID = setInterval(() => {

      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    //after start playing, set the flag to true
    isAutoPlaying = true;
  }else {
    //to stop auto playing - using the id
    clearInterval(intervalID);
    //changing the flag value
    isAutoPlaying = false;
  }
  
}

//code for addEventListeners for buttons used
//for 3 move buttons
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

//for reset button
document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetScore();
  });

//for auto play button
document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });
  

//KEYDOWN events
//get <body> element and the event listener of it
document.body.addEventListener('keydown', (event) => {
  //console.log(event.key);
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissors');
  }
});


function playGame(playerMove) {
  const computermove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    //comparing the computer's move with the move user selected to get result
    if (computermove === 'rock') {
      result = 'Tie.👽';
    } else if (computermove === 'paper') {
      result = 'You lose!!💀';
    } else if (computermove === 'scissors') {
      result = 'You win!😀';
    }

  } else if (playerMove === 'paper') {
    if (computermove === 'rock') {
      result = 'You win!😀';
    } else if (computermove === 'paper') {
      result = 'Tie.👽';
    } else if (computermove === 'scissors') {
      result = 'You lose!!💀';
    }

  } else if (playerMove === 'scissors') {
    if (computermove === 'rock') {
      result = 'You lose!!💀';
    } else if (computermove === 'paper') {
      result = 'You win!😀';
    } else if (computermove === 'scissors') {
      result = 'Tie.👽';
    }
  }

  if (result === 'You win!😀') {
    score.wins += 1;
  } else if (result === 'You lose!!💀') {
    score.losses += 1;
  } else if (result === 'Tie.👽') {
    score.ties += 1;
  }

  //save in the local storage so that scores are not renewed  every time the page is refreshed
  //to convert score into a string - stringify() is used.
  localStorage.setItem('score', JSON.stringify(score));


  //displaying the result in a popup
  //         alert(`You picked ${playerMove}. Computer picked ${computermove}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

  //call to update the score
  updateScoreElement();


  //to add the result
  document.querySelector('.js-result')
    .innerHTML = result;

  //to add the moves
  document.querySelector('.js-moves')
    // .innerHTML = `You -${playerMove} &  Computer  -${computermove}`;
    .innerHTML = `You
<img class="move-icon" src="img/${playerMove}-emoji.png">
<img class="move-icon" src="img/${computermove}-emoji.png">
Computer`
}


function updateScoreElement() {

  //to add the score on the page using DOM
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}


function pickComputerMove() {
  //computer selecting a random move
  const randomNumber = Math.random();

  let computermove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computermove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computermove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computermove = 'scissors';
  }

  return computermove;

}


function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  
  //change the score on the page
  updateScoreElement();
  //remove score saved 
  localStorage.removeItem('score');

//clear results on page
  //to clear the result
    document.querySelector('.js-result')
      .innerHTML =null;

    //to clear the moves selected
    document.querySelector('.js-moves')
      .innerHTML = null;
}