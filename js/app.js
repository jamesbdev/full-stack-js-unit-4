/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

const startBtn = document.querySelector("#btn__reset");
startBtn.addEventListener("click",  () => {
  let game = new Game();
  game.startGame();
})



//phrase.addPhraseToDisplay();








