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

}