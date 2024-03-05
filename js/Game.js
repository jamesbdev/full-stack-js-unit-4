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
      const element = event.target;
      //disable the clicked button
      if (element.disabled == false ) {
        element.setAttribute("disabled", "");
      }
      if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);
        //display letter
        this.checkForWin();
        if (this.checkForWin() == true) {
          console.log("you have won the game");
        }
      } else {
        this.checkForWin();
        //remove heart 
        this.removeLife()
      }
  
    })
  }

  /* check if player has won the game.
   * returns {boolean} True if player has won 
  * else returns false */

  checkForWin() {
    const letters = document.querySelectorAll(".letter");
    const displayedLetters = document.querySelectorAll(".show");

    if (letters.length == displayedLetters.length) {
      console.log("you have won the game")
      return true;
    } else {
      console.log(`there are still ${letters.length - displayedLetters.length} letters to be found`);
      return false;
  }
}

//remove one life from the game
//increment the missed counter
//check if the player has lost
  removeLife() {
    let gameIsOver = false;
    const heartsFull = document.querySelectorAll('.tries img[src="images/liveHeart.png"]');
    
    if (heartsFull !== undefined) {
      heartsFull[0].setAttribute("src", "images/lostHeart.png");
    }
    this.missed ++;
    if (this.missed >= 5) {
      gameIsOver = true;
    
    }
    return gameIsOver;

  }

  //display game is over message
  gameOver(gameIsOver) {
    if (gameIsOver) {
      console.log("game over");
      //display ending message
    } else {
      console.log(this.missed);
    }
  }
}




