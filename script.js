'use strict'

//Create Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

let highscore = 0;

// Defining Random Number aka score
let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number((document.querySelector('.guess').value));

    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No Number');

        // When Player Wins
    } else if (guess === secretNumber) {
        displayMessage('CORRECT NUMBER');
        document.querySelector('body').style.backgroundColor = '#60ee47';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //Highscore
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //When the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost The Game! 💥😵');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {

    //Return Score to Value of 20
    score = 20;
    document.querySelector('.score').textContent = score;

    //Reassign secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Start Guessing
    displayMessage('Start guessing...');

    //Return Width to normal
    document.querySelector('.number').style.width = '15rem';

    //Stop showing correct number
    document.querySelector('.number').textContent = "?";
    //Return guess value to empty
    document.querySelector('.guess').value = '';

    //Change background color back to black
    document.querySelector('body').style.backgroundColor = '#222';



})

