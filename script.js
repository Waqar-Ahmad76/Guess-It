let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum)
let guessedNums = [];
let guessesRemaining = 10;
let playGame = true;
let input = document.querySelector("input");
let prevGuesses = document.querySelector(".prev-guesses");
let guessesLeft = document.querySelector(".remaining-guesses");
let messageDiv = document.querySelector(".message");

prevGuesses.innerHTML = guessedNums;
guessesLeft.innerHTML = guessesRemaining;
let buttonDiv = document.querySelector(".buttonDiv")

let button = document.querySelector("button");


function validateGuess(guess) {
    if (guess <= 0 || guess > 100) {
        alert('Please enter a number between 1 and 100');
        return false;
    }
    else if (isNaN(guess)) {
        alert("Please enter a number ");
        return false;
    }
    else {
        return true;
    }

}

function showMessage(message) {
    messageDiv.innerHTML = message;
}

function endGame() {
    playGame = false;
    input.setAttribute('disabled', '');
    let newGameButton = document.createElement('button');
    newGameButton.innerHTML = `New Game`;
    buttonDiv.appendChild(newGameButton);
    newGameButton.addEventListener("click", () => {
        location.reload();
    })
    // prevGuesses.innerHTML = ``;
    // guessesLeft.innerHTML = ``;
}

function setPrevGuesses(guessedNums) {
    prevGuesses.innerHTML = guessedNums;
}

function setRemainingGuesses(guessesRemaining) {
    guessesLeft.innerHTML = guessesRemaining;
}



function displayGuess(guess) {
    let guessPara = document.querySelector(".guess");
    guessPara.innerHTML = `You guessed ${guess}`;
}

function compareGuess(guess) {
    displayGuess(guess);
    if (guess === randomNum) {
        showMessage(`You guessed it right!`);
        endGame();
        // newGame();
    }
    else {

        guessesRemaining--;
        guessedNums.push(guess);
        if (guess > randomNum) {
            showMessage("Guessed number is higher");
        }
        else {
            showMessage("Guessed number is lower");
        }
        setPrevGuesses(guessedNums);
        setRemainingGuesses(guessesRemaining);

    }
}


if (playGame) {
    button.addEventListener("click", (e) => {
        // console.log(randomNum)
        let inputVal = input.value;
        let guess = parseInt(inputVal);
        let inputValidated = validateGuess(guess);
        if (inputValidated) {
            compareGuess(guess);
            if (guessesRemaining === 0) {
                endGame();
            }
            input.value = ``;
        }
        else {
            input.value = ``;
            return;
        }
    })
}
