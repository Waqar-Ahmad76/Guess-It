let randomNum = Math.round(Math.random() * 100 + 1);
// console.log(randomNum)
let guessedNums = [];
let guessesRemaining = 10;
let playGame = true;
let input = document.querySelector("input");
let prevGuesses = document.querySelector(".prev-guesses");
let remainingGuesses = document.querySelector(".remaining-guesses");
let messageDiv = document.querySelector(".message");

prevGuesses.innerHTML = guessedNums;
remainingGuesses.innerHTML = guessesRemaining;

let button = document.querySelector("button");


function validateGuess(input) {
    if (input <= 0 || input > 100) {
        showMessage('Please enter a number between 1 and 100');
    }
    else if (isNaN(input)) {
        showMessage("Please enter a number ");
    }
    else {
        
    }

}


function showMessage(message) {
    messageDiv.innerHTML = message;
}


function newGame() {
    //
}


function endGame() {
    //
}

if (playGame) {
    button.addEventListener("click", (e) => {


        // console.log(button)
        let inputNum = parseInt(input.vlaue);
        validateGuess(inputNum);


        // console.log(messageDiv)
        if (inputNum === randomNum) {
            messageDiv.innerHTML = "Congrats! you guessed the word";

        }
        else {
            guessedNums.push(inputNum);
            guessesRemaining--;
            prevGuesses.innerHTML = guessedNums;
            remainingGuesses.innerHTML = guessesRemaining
            input.value = '';
            if (inputNum > randomNum) {
                messageDiv.innerHTML = `Guessed number is higher`;
            }
            else {
                messageDiv.innerHTML = `Guessed number is lower`;
            }
        }
    })
}
