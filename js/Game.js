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

        /*
        *personalize style
        */
        //Banner color changes to indicate difficulty level based on phrase length
        const phraseLength = this.activePhrase.phrase.length; 
        if(phraseLength > 14) {
            document.getElementById('banner').style.backgroundColor = "pink";
        } else {
            document.getElementById('banner').style.backgroundColor = "green";
        }
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

        /*
        *personalize style
        */
        //Provides hint image if user loses four lives
        if(this.missed === 4) {
            const imgDiv = document.createElement('div');
            imgDiv.id = 'hintImg';

            if(this.activePhrase.phrase.includes('apple')) {
                imgDiv.innerHTML = '<img src="images/apple-pexels-tom-swinnen-574919.jpeg" alt="Apples on tree" height="200" width="700" border="1px solid black"></img>';
                document.getElementById('banner').appendChild(imgDiv);

            } else if(this.activePhrase.phrase.includes('never')) {
                imgDiv.innerHTML = '<img src="images/never-give-up-pexels-allan-mas-5368943.jpeg" alt="Person helping another up" height="200" width="700" border="1px solid black"></img>';
                document.getElementById('banner').appendChild(imgDiv);

            } else if(this.activePhrase.phrase.includes('nice')) {
                imgDiv.innerHTML = '<img src="images/nice-day-pexels-zen-chung-5537571.jpeg" alt="Person saying goodbye to another" height="200" width="700" border="1px solid black"></img>';
                document.getElementById('banner').appendChild(imgDiv);

            } else if(this.activePhrase.phrase.includes('time')) {
                imgDiv.innerHTML = '<img src="images/time-change-pexels-pixabay-128867.jpeg" alt="A clock and coins" height="200" width="700" border="1px solid black"></img>';
                document.getElementById('banner').appendChild(imgDiv);

            } else if(this.activePhrase.phrase.includes('rome')) {
                imgDiv.innerHTML = '<img src="images/Colosseum-pexels-davi-pimentel-2064827.jpeg" alt="The Colosseum" height="200" width="700" border="1px solid black"></img>';
                document.getElementById('banner').appendChild(imgDiv);
            }
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

        /*
        * Reset elements between games
        */

        //Removes all <li> elements from the <ul> inside the phrase div
        let liElements = document.getElementById('phrase').firstElementChild;
        liElements.innerHTML = ''; 

        //Removes 'wrong', 'chosen', 'disabled' from virtual keyboard btns so that they can be used again in new game
        let qwertyBtns = document.getElementsByClassName('key');
        for(let i=0; i<qwertyBtns.length; i++) {
            qwertyBtns[i].classList.remove('wrong', 'chosen', 'disabled');
        }

        //Changes scoreboard hearts back to the 'liveHeart' png
        const triesLi = document.getElementsByClassName('tries');
        for(let i=0; i<triesLi.length; i++) {
            triesLi[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></img>';
        }

        //Removes any hint img
        if(this.missed >= 4) {
            document.getElementById('hintImg').remove(); 
        }

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