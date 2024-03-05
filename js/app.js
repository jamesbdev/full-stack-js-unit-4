/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

const startBtn = document.querySelector("#btn__reset");
startBtn.addEventListener("click",  () => {
  let game = new Game();
  game.startGame();
  game.activePhrase.checkLetter("a");
  if (game.activePhrase.checkLetter("a") == true) {
    game.activePhrase.showMatchedLetter("a");
  }
})



//phrase.addPhraseToDisplay();








