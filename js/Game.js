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
      //checks if the chosen letter matches the phrase
      //displays the letter if it does
      if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);
        element.classList.add("chosen");
        this.checkForWin();
      } else {
        //remove heart 
        this.removeLife()
        //add "wrong" class to button
        element.classList.add("wrong");
        this.checkForWin();
      }
    })
  }

  /* check if player has won the game.
  * returns {boolean} True if player has won 
  * calls the gameOver method if the player has won
  * else return {boolean} false
  * */

  checkForWin() {
    const letters = document.querySelectorAll(".letter");
    const displayedLetters = document.querySelectorAll(".show");
    if (letters.length == displayedLetters.length) {
      this.gameOver(true);
      return true;
    } else {
      return false;
  }
} 

//remove one life from the game
//increment the missed counter
//check if the player has lost
  removeLife() {
    const heartsFull = document.querySelectorAll('.tries img[src="images/liveHeart.png"]');
    
    if (heartsFull !== undefined) {
      heartsFull[0].setAttribute("src", "images/lostHeart.png");
    }
    //increment missed variable
    this.missed ++;

    if (this.missed >= 5) {
      this.gameOver(true);
    
    }

  }

  //displays win screen if player has won
  //displays loose screen if player lost
  gameOver(gameIsOver) {
    const overlay = document.querySelector("#overlay");
    const title = document.querySelector("#game-over-message");
    if (gameIsOver) {
      //display ending message
      overlay.classList.add("win");
      overlay.classList.remove("lose");
      overlay.classList.remove("start");
      overlay.style.display = "flex";
      title.innerHTML = "Congratulations you have won the game!";
    } else {
      overlay.classList.add("lose");
      overlay.classList.remove("start");
      overlay.classList.remove("win");
      overlay.style.display = "flex";
      title.innerHTML = "You have lost the game, try again!";
    }
    this.resetGame();
  }

  resetGame() {
    //remove all li elements from the letters list 
    const list = document.querySelector("#phrase ul");
    list.innerHTML = "";

    const buttons = document.querySelectorAll("#qwerty button");
    //reset keyboard buttons
    buttons.forEach(button => {
      button.removeAttribute("disabled");
      button.classList.remove("chosen");
      button.classList.remove("wrong");
    });

    //get hearts 
    const hearts = document.querySelectorAll("#scoreboard img");
    //reset full hearts images
    hearts.forEach(heart => {
      //reset src attribute to full heart image
      heart.setAttribute("src", "images/liveHeart.png");
    });
   
  }
}




