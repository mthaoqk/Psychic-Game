var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 20;

var wins = 0;
var losses = 0;



var updateGuessesLeft = function () {

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
};

var updateLetterToGuess = function () {

    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterToGuess);
};

var updateGuessesSoFar = function () {

    document.getElementById("guessSoFar").innerHTML = guessedLetters.join(", ");
};

function winA() {
    if (wins === 3) {
        alert("You Win!");
        resetScore()
    }
}
function lossA() {
    if (losses === 5) {
        alert("Take a L!");
        resetScore()
    }
}
function resetScore() {
    wins = 0
    losses = 0
};

var reset = function () {
    guessesLeft = 20;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function (event) {

    guessesLeft--;

    var letter = event.key.toLowerCase();

    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

    if (letter === letterToGuess) {

        wins++;
        document.getElementById("Win").innerHTML = wins;
        winA();
        reset();
    }

    if (guessesLeft === 0) {

        losses++;
        document.getElementById("Loss").innerHTML = losses;
        lossA();
        reset();
    }
};
