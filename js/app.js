/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startBtn = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");




startBtn.addEventListener("click",  (event) => {

  //initialise Game Class
  const game = new Game();
  //start game
  game.startGame();
 
  //add event listener to trigger handleInteraction method
  keyboard.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() == "button") {
      let button = event.target;
      game.handleInteraction(button);
    }
  });
})


















