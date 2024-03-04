/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
   }
   /* Display phrase on game board */
   addPhraseToDisplay() {
     //get the random phrase 
        let html = "";
        const phraseList = document.querySelector("#phrase");
        const letters = this.phrase.split("");
        letters.forEach(letter => {
            //check if letter is a space or a letter
           if (letter !== " ") {
            html += `<li class="hide letter">${letter}</li>`;
           } else {
            html += `<li class="space">${letter}</li>`
           }
        })
        phraseList.innerHTML = html; 
   } 
   checkLetter() {
   
   }

   showMatchedLetter() {

   }
}
