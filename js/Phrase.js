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
    const list = document.createElement("ul");
    const phraseList = document.querySelector("#phrase");
    const letters = this.phrase.split("");
    letters.forEach((letter) => {
      //check if letter is a space or a letter
      if (letter !== " ") {
        list.innerHTML += `<li class="hide letter">${letter}</li>`;
      } else {
        list.innerHTML += `<li class="space">${letter}</li>`;
      }
    });
    //phraseList.innerHTML = html;
    phraseList.insertAdjacentElement("afterbegin", list);
  }
  //check if letter selected by player matches the letters in the phrase
  //takes one parameter as string 
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
  
  //display the matched letter to the screen
  //takes one parameter as string
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
