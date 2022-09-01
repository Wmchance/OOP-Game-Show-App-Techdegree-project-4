/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseDivUl = document.getElementById('phrase').firstElementChild;
        
        for(let i=0; i<this.phrase.length; i++) {
            if(this.phrase[i] === ' ') {
                let newSpaceLi = document.createElement('li');
                newSpaceLi.classList.add('space'); 
                newSpaceLi.innerText = ' ';
                phraseDivUl.appendChild(newSpaceLi);
            } else {
                let newLetterLi = document.createElement('li');
                newLetterLi.classList.add('hide', 'letter', `${this.phrase[i]}`); 
                newLetterLi.innerText = `${this.phrase[i]}`;
                phraseDivUl.appendChild(newLetterLi);
            }
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        // document.getElementById('qwerty').addEventListener('click', (e) => {
        //     letter = e.target.innerText;
        // })
        if(game.activePhrase.phrase.includes(letter)) { //Look up how to remove the boolean returns
            return true;
        } else {
            return false;
        }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const matchedLetterLi = document.getElementsByClassName(letter);

        for(let i=0; i<matchedLetterLi.length; i++) {
            matchedLetterLi[i].classList.remove('hide');
            matchedLetterLi[i].classList.add('show');
        }
    }

}