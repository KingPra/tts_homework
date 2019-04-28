const output = document.querySelector("#output-log");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const hands = ["rock", "paper", "scissors"];
let handPicked;

// player prototype
function Player(name, score, hand) {
  this.name = name;
  this.score = score;
  this.hand = hand;
}
let player1 = new Player("Player1", 0);
let player2 = new Player("Player2", 0);
// gets called by html buttons, returns the value of the button
// and starts a game.
const buttonValue = val => {
  return btnLogic(val);
};

// this is a score counter;
const reset = (p1, p2) => {
  const ending = "won the tournament. Prepare for a new game.";
  // this logic checks for a winner and displays the winner
  p1.score === p2.score
    ? "The score it tied!!"
    : p1.score > p2.score
    ? (output.textContent = `${p1.name} scored: ${p1.score}, ${
        p2.name
      } scored: ${p2.score}. ${p1.name} ${ending}`)
    : `${p2.name} scored: ${p2.score}, ${p1.name} scored: ${p1.score}. ${
        p2.name
      } ${ending}`;
  // this resets all scores to 0;
  score1.textContent = p1.score = 0;
  score2.textContent = p2.score = 0;
};

//button logic
const btnLogic = val =>
  val === "play"
    ? playGame(player1, player2)
    : val === "reset"
    ? reset(player1, player2)
    : ((handPicked = val), playGame(player1, player2));

// returns a random hand
const randomHand = () => {
  return hands[Math.round(Math.random() * 10) % 3];
};

// write logic for comparing hands;
// compare hand vs hand
//takes 2 variables in argument;
const winningHand = (p1, p2) => {
  let tie;
  let winner;
  let loser;
  tie = "its  a tie";
  //let arr = [winner, loser, tie];
  if (p1.hand === p2.hand) {
    winner = tie;
    loser = tie;
  } else if (
    (p1.hand === "rock" && p2.hand === "scissor") ||
    (p1.hand === "scissors" && p2.hand === "paper") ||
    (p1.hand === "paper" && p2.hand === "rock")
  ) {
    winner = p1;
    p1.score++;
    loser = p2;
  } else {
    winner = p2;
    p2.score++;
    loser = p1;
  }
};

const playGame = (p1, p2) => {
  p1.hand = handPicked;
  p2.hand = randomHand();
  winningHand(p1, p2);
  if (p1.hand === p2.hand) {
    output.textContent = `${p1.name} chose ${p1.hand} and ${p2.name} chose ${
      p2.hand
    }. Its a Tie!!`;
  } else {
    output.textContent = `${p1.name} chose ${p1.hand} and ${p2.name} chose ${
      p2.hand
    }.`;
  }
  score1.textContent = p1.score;
  score2.textContent = p2.score;
};
