//alert("Welcome to the game! The game ends when one player reaches 5 points.");

let playerScore = 0;
let computerScore = 0;
let roundResult;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));

const scoreDisplay = document.querySelector('.scores');
scoreDisplay.textContent = `Player score: ${playerScore}\r\n` +
    `Computer score: ${computerScore}`;

function playRound(e){
    console.log(e.target);
    const playerSelection = e.target.getAttribute('id');
    console.log(playerSelection);
    console.log(`Player selection: ${playerSelection}`);
    const computerSelection = computerPlay();
    console.log(`Computer selection: ${computerSelection}`);

    if(playerSelection === "rock" && computerSelection === "paper"
        || playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        scoreDisplay.textContent = `Player selection: ${playerSelection}\r\n` +
            `Computer selection: ${computerSelection}\r\n` +
            `Computer wins!\r\n` +
            `Player score: ${playerScore}\r\n` +
            `Computer score: ${computerScore}`;
    } else if (playerSelection === computerSelection){
        scoreDisplay.textContent = `Player selection: ${playerSelection}\r\n` +
            `Computer selection: ${computerSelection}\r\n` + 
            `It's a draw!\r\n` +
            `Player score: ${playerScore}\r\n` +
            `Computer score: ${computerScore}`;
    } else {
        playerScore++;
        scoreDisplay.textContent = `Player selection: ${playerSelection}\r\n` +
            `Computer selection: ${computerSelection}\r\n` +
            `Player wins!\r\n` +
            `Player score: ${playerScore}\r\n` +
            `Computer score: ${computerScore}`;
    }

    if(playerScore === 5 || computerScore === 5){
        displayWinner();
    }
}

function displayWinner(){
    if (playerScore > computerScore) {
        scoreDisplay.textContent = `You win!\r\nThe score is ${playerScore} to ${computerScore}`;
    } else {
        scoreDisplay.textContent = `You lose!\r\nThe score is ${playerScore} to ${computerScore}`;
    }
}

function computerPlay(){
    let index = Math.floor(Math.random() * 3);
    switch(index){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}