
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
const player3 = Player('Player 3', 0);
const player4 = Player('Player 4', 0);
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
    let tie = 0;
    let winner = '';

    while (player1.score <playUntil && player2.score < playUntil || tie > 20) {
        tie++
        winner = playRound(player1, player2);
    }
    return winner;
}

//playGame(player1, player2, 5);
// Bonus Questions
// Define a function called playTournament():

// Take 4 players and playUntil as arguments
// Play a game between the first two players, and the second two players
// Play a game between the winners of the first round.
// Announce the tournament winner's name "[name] is the world champion";

function playTournament(player1, player2, player3, player4, playUntil) {
    let winner1 = '';
    let winner2 = '';
    let champ = '';
    let tie = 0;
// runs game for player1 and player 2
    while (player1.score <playUntil && player2.score < playUntil || tie > 20) {
    tie++
    winner1 = playGame(player1, player2, playUntil);
    }
// reset tie to 0
    tie = 0;
// runs game for player 3 and player 4
    while (player3.score <playUntil && player4.score < playUntil || tie > 20) {
    tie++
    winner2 = playGame(player3, player4, playUntil);
    }
//reset tie, winner1 score and winner2 score to 0
    tie = 0;
    winner1.score = 0;
    winner2.score = 0;
// run game for winner of game one and winner of game 2 for championship
    while (winner1.score <playUntil && winner2.score < playUntil || tie > 20) {
    tie++

    champ = playGame(winner1, winner2, playUntil);
    }
    console.log('cchamp mode', champ);
    return champ;

}

playTournament(player1, player2, player3, player4, 5);






//travis code

// Create a Rock, Paper, Scissors Game//


// var game = "Let's play a game!"
// var userName = prompt("What is your name?");
// console.log('uersname is: ', userName);
// // Used a method that allows for the computer to choose
// var computerInput = Math.ceil(Math.random() * 3);
// // var userAnswer = prompt("Rock", "Paper", "Scissors")

// // Created a string that responds to the user input
// prompt("What's up, "+ name + "?" + " " + game)

// // Created responsive interaction between computer and user.
// var userAnswer = prompt("Rock, Paper, Scissors");

// // User repsonse converted to lowercase
//  userAnswer = userAnswer.toLowerCase();

// // created a variable with a choice response for the computer
// var computerResponse = ['paper', 'rock', 'scissors'];

// // used a method .indexOf that was listed on our class slides 
// // however we never spoke about it in detail.

// var usernameIndex = computerResponse.indexOf(userName);

// // utilized another method that we learned in class
// var randomNum = Math.floor(Math.random() * 3);
// var computerChoice = computerResponse[randomNum];

// // Display the choices of both the user and the computer
// console.log(`Your choice is ${userAnswer}, the computer's choice is ${computerChoice}.`);

// // This was tricky however based on what we've learned about arrays in class
// // There had to be an easiser more efficient way to iterate through the possibilties
// // besides using if else statements and switch cases with seem to not refelect
// // DRY CODE

// // This variable creates 3 arrays within an array with 1 statement
// var getHand= new Array(3)
// // A for loop that everyone is familiar with
// for (i=0; i <3; i++)
//     getHand [i]=new Array(3)

// // these are the possibilities of the outcome of the game.I just listed 
// // in sequential order.

// getHand[0][0]="Rock"
// getHand[0][1]="Rock"
// getHand[0][2]="Rock"
// getHand[1][0]="Paper"
// getHand[1][1]="Paper"
// getHand[1][2]="Paper"
// getHand[2][0]="Scissors"
// getHand[2][1]="Scissors"
// getHand[2][2]="Scissors"


// // I remember a colleaque in class speaking about maps
// var resultOptions = {
// [0]: "Tie",
// [1]: "You win",
// [3]: "You lose"
// };

// console.log(resultOptions);
// // var userResult = resultOptions[randomNum][userNameIndex];




















