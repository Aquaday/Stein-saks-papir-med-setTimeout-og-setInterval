const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const displayYourChoice = document.querySelector('#yourChoice');
const displayComputerChoice = document.querySelector('#computerChoice');
const displayResults = document.querySelector('#results');

const displayWins = document.querySelector('#wins');
const displayDraws = document.querySelector('#draws');
const displayLosses = document.querySelector('#losses');
const displayCash = document.querySelector('#displayCash');
const displayCost = document.querySelector('#displayCost');

let wins = 0;
let draws = 0;
let losses = 0;
let cash = 1000;
let cost = 100;

//definerer en nye variabel for å telle oppover
let counting = 0;
//og en for at man ikke kan trykke for raskt
let playing = false

let yourChoice;

const choices = ['rock', 'paper', 'scissors'];

function selectRock() {
  yourChoice = 'rock';
  computerChoice();
}

rockButton.addEventListener('click', selectRock);

function selectPaper() {
  yourChoice = 'paper';
  computerChoice();
}

paperButton.addEventListener('click', selectPaper);

function selectScissors() {
  yourChoice = 'scissors';
  computerChoice();
}

scissorsButton.addEventListener('click', selectScissors);

displayCost.innerHTML = 'Cost: ' + cost;
displayCash.innerHTML = 'Cash: ' + cash;
displayDraws.innerHTML = 'Draws: ' + draws;
displayWins.innerHTML = 'Wins: ' + wins;
displayLosses.innerHTML = 'losses: ' + losses;

displayYourChoice.innerHTML = 'Chose one!';
displayComputerChoice.innerHTML = 'Computer choses';

function computerChoice() {
  //setter inn en if statement over hele funksjonen
  //som gjør at det kun kan kjøre når playing er false
  if (playing === false) {
    //endrer den til true med en gang
    playing = true

    // Lager en setInterval funksjon, som teller pengene ned
    let timerID = setInterval(() => {
      cash--;
      counting++;
      displayCash.innerHTML = 'Cash: ' + cash;
      //og fjerner setInterval når countering er på 100
      if (counting === 100) {
        clearInterval(timerID);
        counting = 0;
      }
    }, 10);

    displayYourChoice.innerHTML = yourChoice;

    //setter deretter inn en setTimeout, som gjør at hele funksjonen inni, skal vente i 2000ms
    setTimeout(() => {
      let computerNumber = choices[Math.floor(Math.random() * 3)];

      displayComputerChoice.innerHTML = computerNumber;

      //og setter inn enda en setTimeout inne i setTimeout for at den skal vente litt lengre med å vise resultatet
      setTimeout(() => {
        if (yourChoice === computerNumber) {
          displayResults.innerHTML = 'Its a draw!';
          let timerID = setInterval(() => {
            cash++;
            counting++;
            displayCash.innerHTML = 'Cash: ' + cash;
            if (counting === 100) {
              clearInterval(timerID);
              counting = 0;
              //og endrer playing til false når hele er gått igjennom
              //sånn at man kan spille igjen.
              playing = false
            }
          }, 5);
          draws++;
          displayDraws.innerHTML = 'Draws: ' + draws;
        } else if (computerNumber === 'rock' && yourChoice === 'paper') {
          displayResults.innerHTML = 'You win!';
          let timerID = setInterval(() => {
            cash = cash + 2;
            counting++;
            displayCash.innerHTML = 'Cash: ' + cash;
            if (counting === 100) {
              clearInterval(timerID);
              counting = 0;
              playing = false
            }
          }, 5);
          wins++;
          displayWins.innerHTML = 'Wins: ' + wins;
        } else if (computerNumber === 'paper' && yourChoice === 'scissors') {
          displayResults.innerHTML = 'You win!';
          let timerID = setInterval(() => {
            cash = cash + 2;
            counting++;
            displayCash.innerHTML = 'Cash: ' + cash;
            if (counting === 100) {
              clearInterval(timerID);
              counting = 0;
              playing = false
            }
          }, 5);
          wins++;
          displayWins.innerHTML = 'Wins: ' + wins;
        } else if (computerNumber === 'scissors' && yourChoice === 'rock') {
          displayResults.innerHTML = 'You win!';
          let timerID = setInterval(() => {
            cash = cash + 2;
            counting++;
            displayCash.innerHTML = 'Cash: ' + cash;
            if (counting === 100) {
              clearInterval(timerID);
              counting = 0;
              playing = false
            }
          }, 5);
          wins++;
          displayWins.innerHTML = 'Wins: ' + wins;
        } else {
          displayResults.innerHTML = 'You lose!';

          losses++;
          displayLosses.innerHTML = 'losses: ' + losses;
        }
        displayCost.innerHTML = 'Cost: ' + cost;
        displayCash.innerHTML = 'Cash: ' + cash;
        cost = 100;
      }, 1000);
    }, 2000);
  }
}
