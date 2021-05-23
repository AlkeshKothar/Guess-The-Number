'use strict';

let secreatNumber = Math.trunc(Math.random() * 21)
    //document.querySelector(`.number`).textContent = secreatNumber
let score = 20
let highscore = 0
document.querySelector('.again').addEventListener(`click`, function() {
    score = 20;
    secreatNumber = Math.trunc(Math.random() * 21)
    document.querySelector('.message').textContent = `Start guessing...`
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector(`.number`).textContent = '?'
    document.querySelector('.guess').value = ""
})

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector('.guess').value)


    if (!guess) {
        document.querySelector('.message').textContent = `Ops Not a number`

    }

    // if correct no
    else if (guess === secreatNumber) {
        document.querySelector('.message').textContent = "Congrats"
        document.querySelector("body").style.backgroundColor = 'green'
        document.querySelector(`.number`).textContent = secreatNumber

        if (score > highscore) {
            highscore = score
            document.querySelector(`.highscore`).textContent = highscore
        }

    }
    // if incorecrt and less
    else if (guess < secreatNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too low`
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `You Lost`
            document.querySelector('.score').textContent = 0;
            document.querySelector("body").style.backgroundColor = 'red'
        }

    }
    // if incorecrt and high
    else if (guess > secreatNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too High`
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = `You Lost`
            document.querySelector('.score').textContent = 0;
            document.querySelector("body").style.backgroundColor = 'red'

        }
    }


})