/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startBtn = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");


//initialise Game Class
const game = new Game();

startBtn.addEventListener("click",  (event) => {
  //start game
  game.startGame();
})

keyboard.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() == "button") {
    let button = event.target;
    game.handleInteraction(button);
  }
});
















