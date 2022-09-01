/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('An apple a day'),
            new Phrase('Never give up'),
            new Phrase('Have a nice day'),
            new Phrase('It is time for a change'),
            new Phrase('When in Rome')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length); //generate a random number
        return this.phrases[randomNum];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const hideLi = document.getElementsByClassName('hide');

        if (hideLi.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1; 

        const triesLi = document.getElementsByClassName('tries');
        if(this.missed <= 5) {
            triesLi[this.missed-1].innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></img>';
        } 
        
        if (this.missed === 5) {
            game.gameOver();
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        document.getElementById('overlay').style.display = '';

        if (this.missed < 5) {
            document.getElementById('game-over-message').innerText = "You won! Great job!";
            document.getElementById('overlay').className = 'win';
        } else {
            document.getElementById('game-over-message').innerText = "Good try! Better luck next time";
            document.getElementById('overlay').className = 'lose';
        }

        document.getElementById('phrase').firstElementChild.children;

    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        //console.log(button.innerText);
        button.classList.add('disabled');

        let isMatch = game.activePhrase.checkLetter(button.innerText);
        if(isMatch) {
            button.classList.add('chosen');
            game.activePhrase.showMatchedLetter(button.innerText); 
            let hasWon = game.checkForWin()
            if(hasWon) {
                game.gameOver();
            }
        } else {
            button.classList.add('wrong');
            game.removeLife(); 
        }
    };

}