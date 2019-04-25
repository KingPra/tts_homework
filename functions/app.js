
// Exercise 1
// Calculating gratuity is a repetitive task, so let's create a couple of functions that do the work for us.   
// create a variable titled billAmount and store a random number (ie: 100)
// create a function titled gratuity()
// gratutity should:
// multiply the value of billAmount by 20%
// hint: use 0.2
// return the value
console.log('gratuity');

const billAmount = Math.round(Math.random() * 100);

function gratuity() {
    return billAmount * 0.2;
}
console.log('this is gratuity function' , gratuity(100));

// create a function titled totalWithGrat()
// totalWithGrat should:
// take in the amount as an argument
// call the gratutity function
// add that to the original bill amount
// return the total bill + gratuity
// log the total (with gratuity) to the console
// append new total to the following phrase:
// "your total including gratuity is:"


// Limitation
// You can only invoke the totalWithGrat function when logging the result
// Bonus Question
// Find a way to fix the decimal point to only 2 places, ie: 100.00
//  (hint: the answer is in the sentence above)




function totalWithGrat(val) {
    return gratuity() + val;
}

console.log(`your total including gratuity is: $${totalWithGrat(billAmount).toFixed(2)}`);


/*--------------------------------------------------------------------------*/
console.log('Exercise 2: Rock, Paper, Scissors');
// Exercise 2  
// Let's revisit Rock Paper Scissors...
// Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ['paper', 'rock', 'scissors'];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)

function getHand() {
    let i = parseInt(Math.random() * 10) % 3;
    return hands[i];
}

// Define two objects for two players. Each player has name and getHand() properties.

function Player (name, score) {
    return {
        name: name,
        score: score
    }
}

const player1 = Player('Player 1', 0);
const player2 = Player('Player 2', 0);
// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

function playRound(p1,p2) {
   let hand1 = player1.hand = getHand();
   let hand2 = player2.hand = getHand();

    let winner = '';

    if (hand1 === hand2) {
        console.log(`${hand1}, ${hand2}, It's a tie!`);
        winner = null;
        // rock > scissors
        // paper > rock
        // scissors > rock
    } else if (hand1 === 'rock') {
        //rock vs scissors
        if (hand2 === 'scissors') {
            console.log(`${hand1}, ${hand2}. ${p1.name} won.`);
            winner = p1;

            // rock vs paper
        } else if (hand2 === 'paper') {
            console.log(`${hand1}, ${hand2}. ${p2.name} won.`);
            winner = p2;
        } 
    } else if (hand1 === 'paper') {
        // paper vs rock
        if (hand2 === 'rock') {
            console.log(`${hand1}, ${hand2}. ${p1.name} won.`);
            winner = p1;
            // paper vs scissors
        } else if (hand2 === 'scissors') {
            console.log(`${hand1}, ${hand2}. ${p2.name} won.`);
            winner = p2;
        }
    } else if (hand1 === 'scissors') {
        // scissors vs rock
        if(hand2 === 'rock') {
            console.log(`${hand1}, ${hand2}. ${p2.name} won.`);
            winner = p2;
            // scissors vs paper
        } else if (hand2 === 'paper') {
            console.log(`${hand1}, ${hand2}. ${p1.name} won.`);
            winner = p1;
        }
    }
    if (winner  !== null) {
        winner.score++;
    }
    return winner;
}

// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

function playGame(player1, player2, playUntil) {
    let p1 = player1.score;
    let p2 = player2.score;
    let tie = 0;
    let winner = '';

    while (player1.score <playUntil && player2.score < playUntil || tie > 20) {
        tie++
        console.log('tie = ', tie);
        console.log('this is p1 in playGame func: ', player1);
        let winner = playRound(player1, player2);
        console.log(winner);
    }
    return winner;
}

playGame(player1, player2, 5);
// Bonus Questions
// Define a function called playTournament():

// Take 4 players and playUntil as arguments
// Play a game between the first two players, and the second two players
// Play a game between the winners of the first round.
// Announce the tournament winner's name "[name] is the world champion";































