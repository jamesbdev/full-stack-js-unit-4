/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /* Display phrase on game board */
  addPhraseToDisplay() {
    //get the random phrase
    let html = "";
    const phraseList = document.querySelector("#phrase");
    const letters = this.phrase.split("");
    letters.forEach((letter) => {
      //check if letter is a space or a letter
      if (letter !== " ") {
        html += `<li class="hide letter">${letter}</li>`;
      } else {
        html += `<li class="space">${letter}</li>`;
      }
    });
    phraseList.innerHTML = html;
  }
  //check if letter selected by player matches the letters in the phrase
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      console.log("letter is matched");
      return true;
    } else {
      console.log("letter was not matched");
      return false;
    }
  }
  
  //display the matched letter to the screen
  showMatchedLetter(letter) {
      //display matched letter on board game
      const letters = document.querySelectorAll(".letter");
      //loop through letters on the board
      letters.forEach(listElement => {
        //display the letter that matches
        if (listElement.innerHTML === letter) {
          listElement.classList.remove("hide");
          listElement.classList.add("show");
        }
      });
  }
}
