/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(misses, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      new Phrase ("Life is a box of chocolates"),
      new Phrase ("Hello World"),
      new Phrase ("I like autumn"),
      new Phrase ("winter is awesome"),
      new Phrase ("full stack javascript")
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomIndex];
  }

  startGame() {
    //hide overlay 
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    //get random phrase and add it to the display
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();

  }

  handleInteraction() {
    const keyboard = document.querySelector("#qwerty");
    keyboard.addEventListener("click", (event) => {
      const letter = event.target.innerHTML;
 
      if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);
        //display letter
      } else {
        console.log("letter is not matched");
      }
  
    })
  }

  checkForWin() {

  }

  removeLife() {

  }

  gameOver() {

  }
}




