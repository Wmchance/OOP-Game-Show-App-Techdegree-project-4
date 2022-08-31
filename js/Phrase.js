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

}