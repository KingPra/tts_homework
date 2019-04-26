console.log("Exercise 2: Rock, Paper, Scissors");
// Exercise 2
// Let's revisit Rock Paper Scissors...
// Define a hands array with the values 'rock', 'paper', and 'scissors';
const hands = ["paper", "rock", "scissors"];

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
function getHand(val) {
  if (val === hands[hands.indexOf(val)]) {
    console.log(
      "getHand func dectected a hand button press,  hand picked is : ",
      val
    );
    //return val;
  } else {
    console.log("getHand func did not detect a rps button press, comp vs comp");
  }
  let i = parseInt(Math.random() * 10) % 3;
  return hands[i];
}

// Define two objects for two players. Each player has name and getHand() properties.
function Player(name, score) {
  return {
    name: name,
    score: score
  };
}

const player1 = Player("Player 1", 0);
const player2 = Player("Player 2", 0);
const player3 = Player("Player 3", 0);
const player4 = Player("Player 4", 0);
// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)

// this is the logic for finding the winner.
function playRound(p1, p2) {
  console.log("handVal from playRound func is: ", buttonVal);
  let hand1 = (player1.hand = getHand(buttonVal));
  let hand2 = (player2.hand = getHand());
  let winner = "";

  if (hand1 === hand2) {
    console.log(`${hand1}, ${hand2}, It's a tie!`);
    winner = null;
    // rock > scissors
    // paper > rock
    // scissors > rock
  } else if (hand1 === "rock") {
    //rock vs scissors
    if (hand2 === "scissors") {
      console.log(`${hand1}, ${hand2}. ${p1.name} won.`);
      winner = p1;

      // rock vs paper
    } else if (hand2 === "paper") {
      console.log(`${hand1}, ${hand2}. ${p2.name} won.`);
      winner = p2;
    }
  } else if (hand1 === "paper") {
    // paper vs rock
    if (hand2 === "rock") {
      console.log(`${hand1}, ${hand2}. ${p1.name} won.`);
      winner = p1;
      // paper vs scissors
    } else if (hand2 === "scissors") {
      console.log(`${hand1}, ${hand2}. ${p2.name} won.`);
      winner = p2;
    }
  } else if (hand1 === "scissors") {
    // scissors vs rock
    if (hand2 === "rock") {
      console.log(`${hand1}, ${hand2}. ${p2.name} won.`);
      winner = p2;
      // scissors vs paper
    } else if (hand2 === "paper") {
      console.log(`${hand1}, ${hand2}. ${p1.name} won.`);
      winner = p1;
    }
  }
  if (winner !== null) {
    winner.score++;
  }
  return winner;
}
// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

function playGame(player1, player2, playUntil) {
  let winner = "";
  let tie = 0;

  while ((player1.score < playUntil && player2.score < playUntil) || tie > 20) {
    tie++;
    winner = playRound(player1, player2);
    counterDisplay(winner);
    //console.log(winner);
  }
  return winner;
}
// this function is for keeping track of the score.
function counterDisplay(player) {
  const score1 = document.getElementById("score1");
  const score2 = document.getElementById("score2");
  if (player === null) {
    console.log(" counterDisplay func...all losers");
  } else if (player === player1) {
    console.log("counterDisplay func...tis player", player);
    score1.innerHTML = player.score;
  } else {
    console.log("counterDisplay func...palyer 2");
    score2.innerHTML = player.score;
  }
  console.log("counterDisplay func...coutner", player);
  // score1.innerHTML = player;
  // score2.textContent = "1++";
}

// function gets value from button click;
// triggered by html element;
let buttonVal;
function buttonValue(val) {
  if (val === "play") {
    //this should call a function to play a game;
       playGame(player1, player2, 1);
    console.log(playGame('after playgame func is called', player1, player2, 1));
    console.log("buttonVal func, button play clicked ", val);

  } else if (val === "reset") {
    console.log("button val has been set to reset, output is: ", val);

    // this should call a reset function, should be able to get rid of playReset;
  } else {
    buttonVal = hands.indexOf(val);
    console.log("buttonValue func, detecting hand ", hands[buttonVal]);
  }
  return buttonVal;
}

//playGame(player1, player2, 5);
//playGame(player1, player2, 5);
// Bonus Questions
// Define a function called playTournament():

// Take 4 players and playUntil as arguments
// Play a game between the first two players, and the second two players
// Play a game between the winners of the first round.
// Announce the tournament winner's name "[name] is the world champion";

// function playTournament(player1, player2, player3, player4, playUntil) {
//   let winner1 = "";
//   let winner2 = "";
//   let champ = "";
//   let tie = 0;
//   let log = document.querySelector("#output-log");

//   /* -----------dry code currently not operational---------*/
//   console.log("playtounamanet here");
//   for (let i = 0; i < 3; i++) {
//     let playerArr = [player1, player2, player3, player4];
//   }
//   /*-----------------------------------------*/

//   // runs game for player1 and player 2
//   while ((player1.score < playUntil && player2.score < playUntil) || tie > 20) {
//     tie++;
//     winner1 = playGame(player1, player2, playUntil);
//   }
//   // reset tie to 0
//   tie = 0;
//   // runs game for player 3 and player 4
//   while ((player3.score < playUntil && player4.score < playUntil) || tie > 20) {
//     tie++;
//     winner2 = playGame(player3, player4, playUntil);
//   }
//   //reset tie, winner1 score and winner2 score to 0
//   tie = 0;
//   winner1.score = 0;
//   winner2.score = 0;
//   // run game for winner of game one and winner of game 2 for championship
//   while ((winner1.score < playUntil && winner2.score < playUntil) || tie > 20) {
//     tie++;

//     champ = playGame(winner1, winner2, playUntil);
//   }

//   return (log.textContent = `${champ.name} is the world champion`);
// }

//console.log(playTournament(player1, player2, player3, player4, 5));

/////// Study this/////////////////////////////////////////////////////

// //travis code

// // Create a Rock, Paper, Scissors Game//

// // created a variable with a choice response for the computer
// var computerResponse = ['paper', 'rock', 'scissors'];
// let userName = 'paper';
// // used a method .indexOf that was listed on our class slides
// // however we never spoke about it in detail.

// var usernameIndex = computerResponse.indexOf(userName);
// console.log(usernameIndex);
// // utilized another method that we learned in class
// var randomNum = Math.floor(Math.random() * 3);
// var computerChoice = computerResponse[randomNum];

// // Display the choices of both the user and the computer
// //console.log(`Your choice is ${userAnswer}, the computer's choice is ${computerChoice}.`);

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
