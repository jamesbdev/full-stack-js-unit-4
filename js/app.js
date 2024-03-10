/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startBtn = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
let game;

startBtn.addEventListener("click",  (event) => {

  //initialise Game Class
  game = new Game();
  //start game
  game.startGame();
})

  //add event listener to trigger handleInteraction method
keyboard.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() == "button") {
    let button = event.target;
      game.handleInteraction(button);
  }
});

const keyboardButtons = keyboard.querySelectorAll("button");

//add event listener to track keyboard input
window.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();
  const buttons = Array.from(keyboardButtons);
  const button = buttons.find(btn => btn.textContent === letter);
  
  if (button && !button.disabled) {
    game.handleInteraction(button);
  }
});


















