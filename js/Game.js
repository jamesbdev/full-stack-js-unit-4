/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = [
      new Phrase ("Life is a box of chocolates"),
      new Phrase ("Hello World"),
      new Phrase ("I like autumn"),
      new Phrase ("winter is awesome"),
      new Phrase ("full stack javascript")
    ];
    this.activePhrase = null;
    //this.gameWon = false;
    this.handleInteraction();
  }

  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomIndex];
  }

  startGame() {
    //reset game 
    //get list element
    const list = document.querySelector("#phrase ul");
    //remove all li elements from the letters list 
    list.innerHTML = "";
    const buttons = document.querySelectorAll("#qwerty button");
    //reset keyboard buttons
    buttons.forEach(button => {
      button.removeAttribute("disabled");
      button.classList.remove("chosen");
      button.classList.remove("wrong");
    });
    const hearts = document.querySelectorAll("#scoreboard img");
    //reset full hearts images
    hearts.forEach(heart => {
        //reset src attribute to full heart image
        heart.setAttribute("src", "images/liveHeart.png");
      });
    //reset score  
    this.missed = 0;
  
    //hide overlay 
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    //get random phrase and add it to the display
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    //this.missed = 0;
  }

  handleInteraction(button) {
      //disable the clicked button
      console.log(button);
    
      if (button !== undefined) {
        const letter = button.innerHTML;
        if (button.disabled == false ) {
          button.setAttribute("disabled", "");
        } 
      //checks if the chosen letter matches the phrase
      //displays the letter if it does
 
      if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);
        button.classList.add("chosen");
        //check if player has won or lost the game
 
      } else {
        //remove heart 
        this.removeLife();
        //add "wrong" class to button
        button.classList.add("wrong");
        //check if player has won or lost the game
      }
      //check if user has won or lost
      if (this.checkForWin()) {

        this.gameOver();
      }
    } 
  }

  /* check if player has won the game.
  * returns {boolean} True if player has won 
  * else return {boolean} false
  * */

  checkForWin() {
    const letters = document.querySelectorAll(".letter");
    const displayedLetters = document.querySelectorAll(".show");
    if (letters.length == displayedLetters.length) {
      console.log("player has won");
      return true;
    } else {
      console.log("player has not won");
      return false;
  }
} 

//remove one life from the game
//increment the missed counter
//check if the player has lost
  removeLife() {
    const heartsFull = document.querySelectorAll('.tries img[src="images/liveHeart.png"]');
    //removes 1 heart
    if (heartsFull[0] !== undefined) {
      heartsFull[0].setAttribute("src", "images/lostHeart.png");
    }
    //increment missed variable
    this.missed ++;
    console.log("missed", this.missed);
    //if player has missed more than 5 times, display loose overlay
    if (this.missed >= 5) {
      //show loose screen
      this.gameOver();
    }
  
  }

 //checks if player has won or lost
 //displays the win or loose screen
 //resets game board
  gameOver() {
    //get overlay screen
    const overlay = document.querySelector("#overlay");
    //get title
    const title = document.querySelector("#game-over-message");
    //call checkforWin() and store it in variable
    const hasWon = this.checkForWin();
    //check if player has won the game 
    if (hasWon) {
      //display ending message
      overlay.classList.add("win");
      overlay.classList.remove("lose");
      overlay.classList.remove("start");
      overlay.style.display = "flex";
      title.innerHTML = "Congratulations you have won the game!";
    //else display the loose modal
    } else {
      overlay.classList.add("lose");
      overlay.classList.remove("start");
      overlay.classList.remove("win");
      overlay.style.display = "flex";
      title.innerHTML = "You have lost the game, try again!";
    }
    //reset the game board
   // 

  }

  resetGame() {
    //get list element
    const list = document.querySelector("#phrase ul");
     //remove all li elements from the letters list 
    list.innerHTML = "";

    const buttons = document.querySelectorAll("#qwerty button");
    //reset keyboard buttons
    buttons.forEach(button => {
      button.removeAttribute("disabled");
      button.classList.remove("chosen");
      button.classList.remove("wrong");
    });

    const hearts = document.querySelectorAll("#scoreboard img");
    //reset full hearts images
    hearts.forEach(heart => {
      //reset src attribute to full heart image
      heart.setAttribute("src", "images/liveHeart.png");
    });
    this.missed = 0;
  }
}




