/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game; 
    game.startGame();
    
    //add eventListener for physical keyboard
    document.addEventListener('keyup', getKeyPress);
})

//EventListener for virtual keyboard
document.getElementById('qwerty').addEventListener('click', (e) => {
    if(e.target.className === 'key') {
        game.handleInteraction(e.target);
        //console.log(e.target);
    }
})

//Function for eventListener for physical keyboard
    //Called in App.js to add event listener when starting new game
    //Called in Game.js to remove event listener at 'Game Over'
function getKeyPress(e) {
    const keyArr = document.getElementsByClassName('key');
    let pressedBtn;
    for(let i=0; i<keyArr.length; i++) {
        if(keyArr[i].innerText === e.key) {
            pressedBtn = keyArr[i];
            game.handleInteraction(pressedBtn);
        }
    } 
}

/*
* Testing code
*/
// document.addEventListener('keyup', getKeyPress);
// document.removeEventListener('keyup', getKeyPress);

// document.addEventListener('keyup', (e) => {
//     const keyArr = document.getElementsByClassName('key');
//     let pressedBtn;
//     for(let i=0; i<keyArr.length; i++) {
//         if(keyArr[i].innerText === e.key) {
//             pressedBtn = keyArr[i];
//             game.handleInteraction(pressedBtn);
//         }
//     }
// })

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
