/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game();

const startBtn = document.querySelector("#btn__reset");

startBtn.addEventListener("click",  () => {
  //initialise Game Class
  //let game = new Game();
  //start game
  game.startGame();
  //add event listener to keyboard and game logic
  game.handleInteraction();
 
})
//reset game testing
//game.resetGame();










