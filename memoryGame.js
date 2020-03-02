// create an empty Array
// do a for loop
// look up concat
// find a shuffle function to use
const cards = document.querySelectorAll('.memory-card');
let cardTotal = cards.length;
let firstChoice = null;
let secondChoice = null;
let cardsFlipped = 0;
let currentScore = 0; //set current score to 0: done 
let bestScore = localStorage.getItem("best-score");


document.querySelector('.current-score').innerText = currentScore;

if (bestScore) {
    document.querySelector('.best-score'), innerText = bestScore;
}
//pull best score from local storage and set to display: done 

const game = document.querySelector('.memory-game');
game.addEventListener('click', onClick);

function newGame() {
    let imageArray = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif", "images/5.gif", "images/6.gif", "images/7.gif", "images/8.gif", "images/9.gif", "images/10.gif", "images/11.gif", "images/12.gif"];
    let imageArray2 = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif", "images/5.gif", "images/6.gif", "images/7.gif", "images/8.gif", "images/9.gif", "images/10.gif", "images/11.gif", "images/12.gif"];
    let fullGameBoard = imageArray.concat(imageArray2);
    shuffle(fullGameBoard);
    console.log(fullGameBoard);

    for (let i = 0; i < cardTotal; i++) {
        for (let card of cards) {
            card.child.src = fullGameBoard[i];
        }
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// create the array for srcimages, double it, shuffle it, assign one to each card;

function onClick(e) {
    currentScore += 1;
    e.target.classList.toggle('.flipped');
    if (!firstChoice) {
        firstChoice = e.target
    } else {
        secondChoice = e.target
    }
    if (firstChoice.src === secondChoice.src) {
        firstChoice.removeEventListener('click', onClick);
        secondChoice.removeEventListener('click', onClick);
        cardsFlipped += 2;
        firstChoice = null;
        secondChoice = null;
    } else {
        setTimeout(function () {
            firstChoice.classList.toggle('.flipped');
            secondChoice.classList.toggle('.flipped');
            firstChoice = null;
            secondChoice = null;
        }, 1000)
    }
    if (cardsFlipped === cardTotal) {
        endGame();
    }
}
//add one to currentscore:done
//flip the card and set that to firstChoice or secondChoice if there is already a firstChoice: done
//if firstChoice and secondChoice - compare if they are the same: done
//if they are the same, remove the event listener and leave them flipped and add 2 to cardsFlipped: done
//if they are not the same, toggle flipped so the images hide again after 1 second (setTimeout) AND reset the choice variables: done
//if cardTotal === cardsFlipped then end the game (maybe another function);

function endGame() {
    if (currentScore < bestScore) {
        localStorage.setItem('best-score', currentScore);
    }
}
//if current score < best score, replace localStorage memory with currentscore and save it in localStorage: done































// const cards = document.querySelectorAll('.memory-card');
// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//     if (lockBoard) return;
//     if (this === firstCard) return;
//     this.classList.add('flip');
//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//         return;
//     }
//     secondCard = this;


//     checkForMatch();
// }

// function checkForMatch() {
//     if (firstCard.dataset.id === secondCard.dataset.id) {
//         disableCards();
//         return;
//     }
//     unflipCards();
// }

// function disableCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
// }

// function unflipCards() {
//     lockboard = true;
//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//         lockBoard = false;
//     }, 1000);
// }

// cards.forEach(card => card.addEventListener('click', flipCard));

